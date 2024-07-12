import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from '../components/images/logo3.png';
import upload from '../components/images/upload.png';
import { useResume } from "./ResumeContext";

function Uploadresume() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const { saveResumeId, savetoken } = useResume();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }

    if (file.type !== 'application/pdf') {
      toast.error("Please upload a PDF file");
      return;
    }

    const formData = new FormData();
    formData.append('files', file);

    setLoading(true);
    try {
      const response = await axios.post('https://api.novajobs.us/api/resumebuild/resume-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          toast.info(`Upload progress: ${percentCompleted}%`);
        }
      });

      const resumeData = response.data.data[0];
      if (!resumeData || !resumeData.resume_parse_data) {
        toast.error("Resume data not found in API response");
        setLoading(false);
        return;
      }

      const parsedData = JSON.parse(resumeData.resume_parse_data);
      localStorage.setItem('resumeData', JSON.stringify(parsedData.templateData));
      saveResumeId(resumeData.id);
      localStorage.setItem('jobSeekerLoginToken', token);
      savetoken(token);

      toast.success("File uploaded successfully");
      setLoading(false);
      setFile(null); // Reset the file input
      navigate(`/form?id=${resumeData.id}`);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("File upload failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-between p-2 bg-blue-300">
          <img src={logo} alt="Logo" style={{ width: '130px' }} />
        </div>
        <div className="text-center my-10">
          <h1 className="font-bold text-3xl mb-3">How do you want to build your resume?</h1>
        </div>
        <div className="flex text-center justify-center gap-10">
          <div className="my-10 p-16 border-dashed border-2 rounded-md border-blue-400">
            <img src={upload} alt="Upload" style={{ height: '50px' }} className="ms-24" />
            <h1 className="font-bold text-xl mt-2 mb-3 text-slate-700">Drag and drop a file here</h1>
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="hidden" 
              id="file-upload" 
              accept=".pdf" 
              aria-label="Upload PDF Resume"
            />
            <label htmlFor="file-upload" className="cursor-pointer text-white px-4 rounded-full py-1 text-xs" style={{ backgroundColor: '#022B5F' }}>Browse</label>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xs"><strong>Files we can read: PDF</strong></h3>
        </div>
        <div className="text-center mt-10">
          <button 
            className={`px-10 rounded-full py-2 text-lg text-violet-950 font-bold border border-violet-950 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={handleUpload} 
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Submit'}
          </button>
        </div>
        <div className="ms-20 mt-10">
          <button className="px-10 rounded-full py-2 text-lg text-violet-950 font-bold border border-violet-950" onClick={() => navigate('/dashboard')}>Back</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Uploadresume;
