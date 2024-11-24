import React from "react";

const SlidingToggle = ({ leftLabel, rightLabel, isRightActive, onToggle }) => {
  return (
    <div className="flex items-center justify-center p-2 rounded-full bg-gray-100 shadow-md">
      {/* Left Toggle Option */}
      <button
        className={`px-6 py-2 font-bold text-sm rounded-l-full transition-all duration-300 ${
          !isRightActive
            ? "bg-white text-black shadow"
            : "bg-gray-100 text-gray-500"
        }`}
        onClick={() => {
          if (isRightActive) onToggle(); // Toggle only if necessary
        }}
      >
        {leftLabel}
      </button>

      {/* Right Toggle Option */}
      <button
        className={`px-6 py-2 font-bold text-sm rounded-r-full transition-all duration-300 ${
          isRightActive
            ? "bg-white text-black shadow"
            : "bg-gray-100 text-gray-500"
        }`}
        onClick={() => {
          if (!isRightActive) onToggle(); // Toggle only if necessary
        }}
      >
        {rightLabel}
      </button>
    </div>
  );
};

export default SlidingToggle;
