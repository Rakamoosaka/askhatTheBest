import React from "react";
import SidebarButtons from "./smallComponents/sideBarButtons";
import SlidingToggleButton from "./smallComponents/SlidingToggleButton";
import ContinueLearning from "./smallComponents/ContinueLearning";
import { Link } from "react-router-dom";

const EducationTab = () => {
  return (
    <div className="flex flex-col w-full items-start mt-5">
      <SlidingToggleButton />
      <ContinueLearning />
    </div>
  );
};

export default EducationTab;
