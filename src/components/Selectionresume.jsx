import React from "react";

import edit from '../components/images/edit.png';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from '../components/images/logo3.png';
import upload from '../components/images/upload.png';
import { useResume } from "./ResumeContext";


function Selectionresume() {
   
    const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const { saveResumeId, savetoken } = useResume();
  
  
  console.log(token, "tokennn")
  
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
            'Authorization': token // Use the token from URL parameters
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            toast.info(`Upload progress: ${percentCompleted}%`);
          }
        });
  
        console.log("Full API Response:", response.data.data[0].id);
  
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

    const handleClick = () => {
        navigate('/form');
        localStorage.setItem('jobSeekerLoginToken', token);
      savetoken(token);
    };


    return (
        <>
            <div className="flex justify-between p-2 h-14 bg-blue-300">
                <img src={logo} alt="Logo" style={{ width: '130px' }} />
            </div>
            {console.log(token)}
            <div className="min-h-screen flex flex-col ">
                <div className="text-center my-10">
                    <h1 className="font-bold text-3xl mb-3">Are you uploading an existing resume?</h1>
                    <h6 className="text-sm font-medium text-slate-500">Just review, edit, and update it with new information</h6>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-10 mx-5">
                    <div className="">
                    <button  className="w-full md:w-auto">
                        <div className="my-10 p-10 px-16 border rounded-md border-gray-400 text-center">
                            <img src={upload} alt="Upload Icon" style={{ height: '50px' }} className="mx-auto mb-4" />
                            <h1 className="font-bold text-lg mb-2 text-slate-700">Yes, upload from my resume</h1>
                            <input 
              type="file" 
              onChange={handleFileChange} 
              className="hidden" 
              id="file-upload" 
              accept=".pdf"
            />


                            <h6 className="text-xs mb-9">We'll give you expert guidance to fill out your info <br /> and enhance your resume, from start to finish</h6>
                            <label htmlFor="file-upload" className="cursor-pointer text-white px-4 rounded-full py-1 text-xs mt-3" style={{ backgroundColor: '#022B5F' }}>Browse</label>

                            <div className="text-center mt-2">
          <button className="px-10 rounded-full py-2 text-lg text-violet-950 font-bold border border-violet-950" onClick={handleUpload}>Submit</button>
        </div>
                        </div>
                    </button>
                    
                    </div>
                    <button onClick={handleClick} className="w-full md:w-auto">
                        <div className="my- p-16 py-24 border rounded-md border-gray-400 text-center">
                            <img src={edit} alt="Edit Icon" style={{ height: '50px' }} className="mx-auto mb-4" />
                            <h1 className="font-bold text-lg mb-2 text-slate-700">No, start from scratch</h1>
                            <h6 className="text-xs">We'll guide you through the whole process so your <br /> skills can shine</h6>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Selectionresume;
