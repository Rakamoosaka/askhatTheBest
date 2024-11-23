import React, { useState } from "react";
import Header from "./Header";
import SubSignup from "./smallComponents/SubSignup";
const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const handleSuccessFromChild = () => {
    setSuccess(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header /> {/* Retain the Header */}
      <div className="flex w-full h-full">
        {/* Right-side content */}
        <div className="flex flex-1 w-full justify-center items-center p-4">
          {success ? (
            <h1>Sign Up Success</h1>
          ) : (
            <SubSignup onSuccess={handleSuccessFromChild} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
