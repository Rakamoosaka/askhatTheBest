import React from "react";

const ContinueLearning = () => {
  return (
    <div className="flex flex-col items-start space-y-4 p-4">
      {/* Heading */}
      <h2 className="text-lg font-semibold">Продолжить обучение</h2>

      {/* Info Box */}
      <div className="w-full bg-gray-300 text-gray-700 text-sm px-4 py-3 rounded-lg">
        Ни один сценарий не начат. Выбери сценарий из разделов.
      </div>
    </div>
  );
};

export default ContinueLearning;
