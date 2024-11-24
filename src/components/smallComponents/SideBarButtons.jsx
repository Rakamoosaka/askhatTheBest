import React from "react";
import {
  FaGraduationCap,
  FaBullseye,
  FaTrophy,
  FaCheckCircle,
  FaComments,
  FaUser,
} from "react-icons/fa";

const SidebarButton = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-2 text-left text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-purple-100 border-2 border-purple-500 text-purple-600"
        : "text-black hover:bg-gray-100"
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    <span className="mr-3 text-xl">{icon}</span>
    {label}
  </button>
);

const SidebarButtons = ({ activeIndex, setActiveIndex }) => {
  const buttons = [
    { icon: <FaGraduationCap />, label: "Обучение" },
    { icon: <FaBullseye />, label: "Достижения" },
    { icon: <FaTrophy />, label: "Рейтинг" },
    { icon: <FaCheckCircle />, label: "Пробный тест" },
    { icon: <FaComments />, label: "Форум" },
    { icon: <FaUser />, label: "Профиль" },
  ];

  return (
    <div className="flex flex-col items-start space-y-2 mt-3">
      {buttons.map((button, index) => (
        <SidebarButton
          key={index}
          icon={button.icon}
          label={button.label}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default SidebarButtons;