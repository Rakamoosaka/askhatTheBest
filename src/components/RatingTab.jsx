import React from "react";

const RaitingTab = () => {
  const users = [
    {
      rank: 1,
      name: "aitore the best",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
    {
      rank: 2,
      name: "aitore better than askhat",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
    {
      rank: 3,
      name: "aitore master",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
    {
      rank: 4,
      name: "aitore lord of everything",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
    {
      rank: 5,
      name: "aitore not bad",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
    {
      rank: 6,
      name: "aitore xD",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
    {
      rank: 7,
      name: "aitore rrrrr",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
    {
      rank: 8,
      name: "aitore america",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
    {
      rank: 9,
      name: "aitore no kazakistan",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
    {
      rank: 10,
      name: "aitore is hungry",
      quizzes: 6,
      answers: 6,
      achievements: 5,
      points: 37,
    },
  ];

  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="font-bold text-xl text-center mb-4">Rating of users</h2>

      {/* Table Header */}
      <div className="grid grid-cols-5 font-medium bg-orange-200 text-black p-4 rounded-t-lg">
        <div>Ranking</div>
        <div>User name</div>
        <div>Quizzes</div>
        <div>Right answers</div>
        <div>Total points</div>
      </div>

      {/* User Rows */}
      <div className="bg-orange-50 divide-y divide-orange-300 rounded-b-lg">
        {users.map((user, index) => (
          <div
            key={user.rank}
            className={`grid grid-cols-5 p-4 items-center ${
              user.rank === 1
                ? "bg-yellow-100 border-2 border-yellow-400"
                : user.rank === 2
                ? "bg-gray-100 border-2 border-gray-400"
                : user.rank === 3
                ? "bg-orange-100 border-2 border-orange-400"
                : ""
            }`}
          >
            <div className="font-bold text-lg">
              {String(user.rank).padStart(2, "0")}
            </div>
            <div className="text-gray-700">{user.name}</div>
            <div className="text-center">{user.quizzes}</div>
            <div className="text-center">{user.answers}</div>
            <div className="text-right font-medium">{user.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaitingTab;
