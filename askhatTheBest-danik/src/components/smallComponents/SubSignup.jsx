import React, { useEffect, useState, useRef } from "react";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SubSignup = ({ onSuccess }) => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    if (success) onSuccess();
  }, [success]);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setValidMatch(PWD_REGEX.test(matchPwd));
  }, [matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle user registration
  const handleRegister = async () => {
    const userData = {
      email,
      username: user,
      password: pwd,
      password2: matchPwd,
    };

    try {
      const response = await axios.post("/api/register/", userData); // Axios instance automatically prepends baseURL
      console.log("User registered successfully:", response.data);
      onSuccess(); // Notify the parent component
    } catch (error) {
      console.error("Registration failed:", error.response || error.message);
      setErrMsg(
        error.response?.data?.detail ||
          error.response?.data?.non_field_errors ||
          "Failed to register. Try again."
      );
    }
  };

  const handleAlready = () => {
    navigate("/login"); // Navigate to the Sign In page
  };

  const handleGoToLastPage = () => {
    // Replace '/last-page' with the actual route of your last page
    navigate("/login");
  };

  return (
    <div className="flex flex-1 w-full justify-center mt-16 items-center p-4 mb-32">
      <div className="flex flex-col items-start  p-6 rounded-lg text-[#1b0d13] w-full max-w-md">
        <h2 className="text-2xl font-semibold text-[#000000] mb-6 font-josefinSans self-center">
          Sign up
        </h2>

        {errMsg && <p className="text-red-500 text-sm mb-4">{errMsg}</p>}

        <label className="text-base font-josefinSans text-[#000000] font-medium mb-1">
          Your email
        </label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-6 text-sm border border-[#000000] rounded-lg focus:outline-none bg-[#F6F7FF]"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <p
          className={` ${
            emailFocus && email && !validEmail
              ? "font-josefinSans text-sm text-[#ae2b2b]"
              : "hidden"
          }`}
        >
          8 to 24 characters. Must include uppercase and lowercase letters, a
          number and a special character. Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>

        <label className="text-base font-josefinSans text-[#000000] font-medium mb-1">
          Name
        </label>
        <input
          ref={userRef}
          type="text"
          placeholder="Omar Abdulrahman"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 mb-4 text-sm border border-[#000000] rounded-lg focus:outline-none bg-[#F6F7FF]"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={` ${
            userFocus && user && !validName
              ? "font-josefinSans text-sm text-[#ae2b2b]"
              : "hidden"
          }`}
        >
          4 to 24 characters. Must begin with a letter. Letters, numbers,
          underscores, hyphens allowed.
        </p>

        <label className="text-base font-josefinSans text-[#000000] font-medium mb-1">
          Create a password
        </label>
        <p className="text-[#000000] opacity-50 text-xs font-josefinSans">
          Passwords should be at least 8 characters long and should contain a
          mixture of letters, numbers, and other characters.
        </p>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => setPwd(e.target.value)}
          className="w-full p-2 mb-4 text-sm border border-[#000000] rounded-lg focus:outline-none bg-[#F6F7FF]"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          value={pwd}
        />
        <p
          id="pwdnote"
          className={` ${
            pwdFocus && pwd && !validPwd
              ? "font-josefinSans text-sm text-[#ae2b2b]"
              : "hidden"
          }`}
        >
          8 to 24 characters. Must include uppercase and lowercase letters, a
          number and a special character. Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>

        <label className="text-base font-josefinSans text-[#000000] font-medium mb-1">
          Repeat the password
        </label>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => setMatchPwd(e.target.value)}
          className="w-full p-2 mb-4 text-sm border border-[#000000] rounded-lg focus:outline-none bg-[#F6F7FF]"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
          value={matchPwd}
        />

        <div className="flex justify-between w-full mt-6">
          <button
            onClick={handleGoToLastPage}
            className="text-[#162850] font-josefinSans text-lg font-medium"
          >
            Back
          </button>

          <button
            onClick={handleRegister}
            className={`bg-[#DAA06D] shadow-lg font-josefinSans text-base text-white px-12 py-1 rounded-lg font-medium ${
              validName && validPwd && validEmail && validMatch
                ? ""
                : "opacity-80 cursor-not-allowed"
            } `}
            disabled={
              !validName || !validPwd || !validEmail || !validMatch
                ? true
                : false
            }
          >
            Register
          </button>
        </div>
        <div className="flex justify-center w-full mt-8">
          <button
            onClick={handleAlready}
            className="text-base font-josefinSans text-[#000000] font-medium mb-1 hover:underline decoration-[#000000]"
          >
            Already have an account?
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubSignup;
