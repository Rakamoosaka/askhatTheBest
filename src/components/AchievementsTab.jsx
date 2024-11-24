import React from "react";
import { FaBolt } from "react-icons/fa";

const TaskCard = ({ taskName, progress, maxProgress, points }) => (
  <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white mb-4">
    <div className="flex items-center">
      <div className="text-yellow-500 text-3xl mr-4">
        <FaBolt />
      </div>
      <div>
        <h3 className="font-medium">{taskName}</h3>
        <div className="mt-2">
          <progress
            value={progress}
            max={maxProgress}
            className="w-full h-2 rounded-full bg-gray-200"
          />
          <p className="text-sm text-gray-500 mt-1">
            {progress} / {maxProgress}
          </p>
        </div>
      </div>
    </div>
    <div className="text-orange-500 text-lg font-medium">{`+${points}p`}</div>
  </div>
);

const AchievementsTab = () => {
  const tasks = [
    {
      taskName: "Закончите программу 6 класса",
      progress: 0,
      maxProgress: 10,
      points: 5,
    },
    {
      taskName: "Закончите программу 6 класса",
      progress: 0,
      maxProgress: 10,
      points: 5,
    },
    {
      taskName: "Закончите программу 6 класса",
      progress: 0,
      maxProgress: 10,
      points: 5,
    },
  ];

  return (
    <div className="p-6">
      {/* Welcome Banner */}
      <div className="bg-yellow-100 p-4 rounded-lg mb-6">
        <h2 className="font-bold text-lg">Добро пожаловать!</h2>
        <p className="text-sm mt-1">
          Выполняйте новые задания каждый день и получайте награды!
        </p>
      </div>

      {/* Tasks Section */}
      <h2 className="font-semibold text-lg mb-4">Задания</h2>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          taskName={task.taskName}
          progress={task.progress}
          maxProgress={task.maxProgress}
          points={task.points}
        />
      ))}
    </div>
  );
};

export default AchievementsTab;
