import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "./Header";
import SubSignup from "./smallComponents/SubSignup";

const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSuccessFromChild = () => {
    setSuccess(true);
  };

  // Use useEffect to navigate when success becomes true
  useEffect(() => {
    if (success) {
      navigate("/main"); // Navigate to /main
    }
  }, [success, navigate]);

  return (
    <div className="flex flex-col h-screen">
      <Header /> {/* Retain the Header */}
      <div className="flex w-full h-full">
        {/* Right-side content */}
        <div className="flex flex-1 w-full justify-center items-center p-4">
          {!success && <SubSignup onSuccess={handleSuccessFromChild} />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
