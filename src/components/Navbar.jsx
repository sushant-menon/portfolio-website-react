import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between mx-auto bg-black p-5 px-8 md:px-16 items-center">
      <Link
        to="/home"
        className="text-white text-4xl cursor-pointer font-extrabold"
      >
        SM
      </Link>

      {/* large screen menu  */}

      <div className="text-lg text-white hidden md:block">
        <div className="mx-auto max-w-xl">
          <nav className="relative z-0 flex space-x-7">
            <Link to="/home" className="peer/home flex-1">
              Home
            </Link>
            <Link to="/project" className="peer/work flex-1">
              Works
            </Link>
            <Link to="/about" className="peer/about flex-1">
              About
            </Link>
            <Link to="/contact" className="peer/contact flex-1">
              Contact
            </Link>
            <span className="absolute -left-10 -z-10 h-full w-1/4 scale-x-110 scale-y-125 rounded-full bg-gray-600 peer-focus/home:left[-20%] duration-300 peer-focus/work:left-[13%] peer-focus/about:left-[40%] peer-focus/contact:left-[68%]"></span>
          </nav>
        </div>
      </div>

      {/* Hamburger menu */}

      {/* Hamburger starts here */}
      <div className="block md:hidden">
        <button
          id="menu-btn"
          className={`block hamburger lg:hidden focus:outline-none mb-3 cursor-pointer ${
            isMenuOpen ? "open" : ""
          }`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        <div
          id="menu"
          className={`absolute z-40  ${
            isMenuOpen ? "block" : "hidden"
          } p-6 left-6 right-6 top-20 z-100`}
        >
          <div className="flex flex-col items-center justify-evenly w-full space-y-10 font-bold text-black bg-white rounded-xl h-96 text-2xl">
            <Link
              onClick={handleLinkClick}
              to="/"
              className="w-full text-center"
            >
              Home
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/project"
              className="w-full text-center"
            >
              Works
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/about"
              className="w-full text-center"
            >
              About
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/contact"
              className="w-full text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* Hamburger ends here */}
    </div>
  );
};

export default Navbar;
