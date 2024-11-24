import React from "react";

const ProfilePage = () => {
  const user = {
    profilePicture: "/images/profile.jpg", // Replace with a real image URL or path
    username: "JohnDoe",
    level: 12,
    streak: 45, // Days of streak
    achievements: [
      { name: "5 квизов", icon: "/images/achievement1.png" },
      { name: "10 квизов", icon: "/images/achievement2.png" },
      { name: "11 квизов", icon: "/images/achievement3.png" },
    ],
    languages: [
      {
        name: "6 класс",
       
        progress: 75, // Percentage completed
      },
      {
        name: "7 класс",
       
        progress: 45,
      },
      {
        name: "8 класс",
       
        progress: 30,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile Header */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-bold">{user.username}</h1>
            <p className="text-gray-600">Level {user.level}</p>
            
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
        <div className="flex gap-4">
          {user.achievements.map((achievement, index) => (
            <div
              key={index}
              className="w-24 h-24 flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md"
            >
              
              <p className="text-center text-sm font-medium">
                {achievement.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Language Progress */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Language Progress</h2>
        <div className="space-y-4">
          {user.languages.map((language, index) => (
            <div key={index}>
              <div className="flex items-center">
                <img
                  src={language.flag}
                  alt={`${language.name} flag`}
                  className="w-8 h-8 mr-4"
                />
                <span className="font-medium">{language.name}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${language.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {language.progress}% completed
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
