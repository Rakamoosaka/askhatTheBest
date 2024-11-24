import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Using react-icons for the profile icon

const ProfileComponent = () => {
  return (
    <div className="flex justify-end items-center p-4">
      {/* Profile Label */}
      <span className="text-black text-sm font-medium mr-2">Профиль</span>
      {/* Profile Icon */}
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
        <FaUserCircle className="text-blue-500 text-lg" />
      </div>
    </div>
  );
};

export default ProfileComponent;
