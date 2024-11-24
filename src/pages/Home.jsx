import React from "react";
import Header from "../components/Header";
import HomeMainPart from "../components/HomeMainPart";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow">
        <HomeMainPart />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
