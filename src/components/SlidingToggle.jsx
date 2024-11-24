import React from "react";

const SlidingToggle = ({ leftLabel, rightLabel, isRightActive, onToggle }) => {
  return (
    <div className="flex items-center justify-center">
      {/* Left Button */}
      <button
        className={`px-4 py-2 font-medium text-lg rounded-l-full transition ${
          !isRightActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => {
          if (isRightActive) onToggle(); // Toggle only if active state needs to change
        }}
      >
        {leftLabel}
      </button>

      {/* Right Button */}
      <button
        className={`px-4 py-2 font-medium text-lg rounded-r-full transition ${
          isRightActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => {
          if (!isRightActive) onToggle(); // Toggle only if active state needs to change
        }}
      >
        {rightLabel}
      </button>
    </div>
  );
};

export default SlidingToggle;
