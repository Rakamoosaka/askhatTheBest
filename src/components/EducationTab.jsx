import React, { useState } from "react";
import SlidingToggleButton from "./smallComponents/SlidingToggleButton";
import { useNavigate } from "react-router-dom";
import SlidingToggle from "../components/SlidingToggle.jsx";

const EducationTab = () => {
  const [isResources, setIsResources] = useState(false); // Toggle state

  const quizzes = [
    { grade: 6, title: "Палеолит", image: "./images.jpg" },
    { grade: 7, title: "Палеолит", image: "./images (1).jpg" },
    { grade: 8, title: "Палеолит", image: "./images (2).jpg" },
    { grade: 9, title: "Палеолит", image: "./images (3).jpg" },
    { grade: 10, title: "Палеолит", image: "./images (4).jpg" },
  ];

  const resources = [
    { id: 1, title: "Resource 1", description: "Description of resource 1" },
    { id: 2, title: "Resource 2", description: "Description of resource 2" },
    { id: 3, title: "Resource 3", description: "Description of resource 3" },
  ];

  const navigate = useNavigate();

  const handleCardClick = (grade) => {
    navigate(`/learn`); 
  };

  const handleToggle = () => {
    setIsResources((prev) => !prev); // Properly toggle state
  };

  return (
    <div className="p-6">
      {/* Sliding Toggle Button */}
      <div className="flex justify-center mb-6">
        <SlidingToggleButton
          leftLabel="Учить"
          rightLabel="Ресурсы"
          isRightActive={isResources}
          onToggle={handleToggle} // Ensure toggle function is passed
        />
      </div>

      {/* Conditional Content */}
      {!isResources ? (
        <div>
          <h1 className="text-2xl font-bold text-center mb-8">
            Доступные викторины
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {quizzes.map((quiz) => (
              <div
                key={quiz.grade}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 cursor-pointer"
                onClick={() => handleCardClick(quiz.grade)}
              >
                <img
                  src={quiz.image}
                  alt={quiz.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold">{quiz.grade} класс</h2>
                  <p className="text-gray-600">{quiz.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-center mb-8">
            Доступные ресурсы
          </h1>
          <div className="grid grid-cols-1 gap-4">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold">{resource.title}FFFF</h2>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationTab;
