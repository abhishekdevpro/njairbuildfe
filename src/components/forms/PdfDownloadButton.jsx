import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PdfDownloadButton = ({token}) => {
  const [resumeId, setResumeId] = useState(null);

const cleanedToken = token.replace(/"/g, '').trim(); 
console.log(cleanedToken)
  useEffect(() => {
    // Extract resumeId from URL
    const path = window.location.pathname;
    const id = path.split('/').pop(); // Get the last part of the URL
    setResumeId(id);
  }, []);

  const handleChoosePlan = () => {
    const amount = 1.99; // Fixed price
   

    const payload = {
      amount,
      ResumeId: "4", // Ensure the field name matches the API expectation
      token : cleanedToken || '' // Ensure the field name matches the API expectation
    };

    axios.post('https://api.novajobs.us/api/jobseeker/payment/create-checkout-session', payload, {
      headers: { 'Content-Type': 'application/json' }, // Use JSON content type
    })
    .then(response => {
      const data = response.data;
      if (data && data.data) {
        // Redirect to the PayPal URL provided in the response
        window.location.href = data.data;
      }
    })
    .catch(error => console.error('Payment Error:', error));
  };

  return (
    <button 
      onClick={handleChoosePlan} 
      className="bg-blue-900 text-white p-2 py-4 pb-5 rounded-lg m-2"
    >
      Pay & Download
    </button>
  );
};

export default PdfDownloadButton;
