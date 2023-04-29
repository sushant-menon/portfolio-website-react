import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto bg-black p-5 px-6 md:px-16 items-center">
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

      {/* hamburger  */}
      <span className="md:hidden block">
        <button
          id="menu-btn"
          className="hamburger focus:outline-none"
          type="button"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </span>

      {/* Hamburger starts from here */}

      <div
        id="menu"
        className="hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="#" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a href="#" className="w-full py-3 rounded-full bg-cyan text-center">
            Sign Up
          </a>
        </div>
      </div>

      {/* hamburger menu ends here */}
    </div>
  );
};

export default Navbar;
