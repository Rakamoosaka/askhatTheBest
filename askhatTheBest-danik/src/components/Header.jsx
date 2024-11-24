import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex w-11/12 mx-auto items-center justify-between px-4 md:px-16 py-4 bg-[#f6f7ff] font-josefinSans">
      {/* Logo Section */}
      <Link to="/home">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Study Buddy Logo"
            className="h-12 md:h-20"
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
