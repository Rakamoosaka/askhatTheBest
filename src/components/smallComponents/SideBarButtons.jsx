import React from "react";
import {
  FaGraduationCap,
  FaBullseye,
  FaTrophy,
  FaCheckCircle,
  FaComments,
  FaUser,
} from "react-icons/fa";

const SidebarButtons = () => {
  const buttons = [
    { icon: <FaGraduationCap />, label: "Обучение", active: true },
    { icon: <FaBullseye />, label: "Достижения" },
    { icon: <FaTrophy />, label: "Рейтинг" },
    { icon: <FaCheckCircle />, label: "Пробный тест" },
    { icon: <FaComments />, label: "Форум" },
    { icon: <FaUser />, label: "Профиль" },
  ];

  return (
    <div className="flex flex-col items-start space-y-2 mt-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`flex items-center w-full px-4 py-2 text-left text-sm font-medium rounded-lg ${
            button.active
              ? "bg-purple-100 border-2 border-purple-500 text-purple-600"
              : "text-black hover:bg-gray-100"
          }`}
        >
          <span className="mr-3 text-xl">{button.icon}</span>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default SidebarButtons;
