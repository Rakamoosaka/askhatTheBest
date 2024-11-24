import React, { useState } from "react";

const SlidingToggleButton = () => {
  const [isLearnSelected, setIsLearnSelected] = useState(true);

  return (
    <div className="flex items-center ml-4">
      <div className="relative flex w-56 h-10 bg-gray-300 rounded-xl shadow-inner">
        <button
          onClick={() => setIsLearnSelected(true)}
          className={`flex-1 z-10 font-medium text-sm rounded-xl ${
            isLearnSelected ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          Учить
        </button>
        <button
          onClick={() => setIsLearnSelected(false)}
          className={`flex-1 z-10 font-medium text-sm rounded-xl ${
            !isLearnSelected ? "text-black font-bold" : "text-gray-500"
          }`}
        >
          Повторение
        </button>
        {/* Sliding background */}
        <div
          className={`absolute top-1 left-1 h-8 w-[108px] bg-white rounded-xl shadow-md transition-transform duration-300 ${
            isLearnSelected
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SlidingToggleButton;
