import React from "react";
import Header from "../components/Header";
import HomeMainPart from "../components/HomeMainPart";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <HomeMainPart />
    </div>
  );
};

export default Home;
