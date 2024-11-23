import React from "react";
import SidebarButtons from "../components/smallComponents/sideBarButtons";
import SlidingToggleButton from "../components/smallComponents/SlidingToggleButton";
import ContinueLearning from "../components/smallComponents/ContinueLearning";
import ProfileComponent from "../components/smallComponents/ProfileComponent";

const Mainpage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <img src="/logo.svg" alt="Study Buddy Logo" className="h-12 md:h-20" />
        <SidebarButtons />
      </div>
      <div className="flex flex-col items-center mt-5">
        <div>
          <ProfileComponent />
          <SlidingToggleButton />
          <ContinueLearning />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
