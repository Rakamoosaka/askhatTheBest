import React, { useState } from "react";
import Footer from "../components/Footer";
import EducationTab from "../components/EducationTab";
import { Link } from "react-router-dom";
import SidebarButtons from "../components/smallComponents/sideBarButtons";
import AchievementsTab from "../components/AchievementsTab";
import RaitingTab from "../components/RatingTab";
import TestLevelTab from "../components/TestLevelTab";
import ProfilePage from "../components/ProfilePage";

const Mainpage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderTabContent = () => {
    switch (activeIndex) {
      case 0:
        return <EducationTab />;
      case 1:
        return <AchievementsTab />; // Placeholder for Achievements
      case 2:
        return <RaitingTab />; // Placeholder for Ratings
      case 3:
        return <TestLevelTab />; // Placeholder for Trial Test
      case 4:
        return <div></div> // Placeholder for Forum
      case 5:
        return <ProfilePage/>; // Placeholder for Profile
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow mx-10 mt-5">
        {/* Sidebar with Separator */}
        <div className="flex flex-col border-r border-gray-300 pr-6">
          <Link to="/home">
            <img
              src="/logo.svg"
              alt="Study Buddy Logo"
              className="h-12 md:h-20"
            />
          </Link>
          <SidebarButtons
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6">{renderTabContent()}</div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mainpage;