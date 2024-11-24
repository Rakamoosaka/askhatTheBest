import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TestLevelTab = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        {/* Title */}
        <h2 className="font-bold text-xl text-center text-gray-900 mb-4">
          Пройдите пробный тест и получите примерную оценку:
        </h2>

        {/* Illustration */}
        <div className="flex justify-center my-4">
          <img
            src="./images (1).jpg"
            alt="Illustration"
            className="w-32 h-auto"
          />
        </div>

        {/* Checklist */}
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Ознакомьтесь с заданиями *
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Пробный тест занимает около 45 минут
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Получите примерную оценку знаний
          </li>
        </ul>

        {/* Note */}
        <p className="text-sm text-gray-500 mt-4">
          * Пробный тест может включать типы заданий и напоминания, которые не
          используются в сертификационном тестировании.
        </p>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="py-2 px-6 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition">
            ОТМЕНА
          </button>
          <button className="py-2 px-6 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
            ПРОБНЫЙ ТЕСТ
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestLevelTab;
