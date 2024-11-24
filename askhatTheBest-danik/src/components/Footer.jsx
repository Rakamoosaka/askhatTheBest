import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center px-6 py-4 border-t text-sm text-gray-500">
      <div className="flex items-center">
        <img
          src="/logoSimple.svg"
          alt="Logo"
          className="w-16 h-16 opacity-80"
        />
        <span>2024 Nomadia</span>
      </div>
      <div className="flex ml-7">
        <a
          href="/about"
          className="hover:text-gray-700 transition duration-200"
        >
          About us
        </a>
        <a
          href="/contacts"
          className="hover:text-gray-700 ml-7 transition duration-200"
        >
          Contacts
        </a>
      </div>
    </footer>
  );
};

export default Footer;
