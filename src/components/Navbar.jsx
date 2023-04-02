import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto bg-cyan-400 p-4 px-6 md:px-16">
      <Link
        to="/home"
        className="text-gray-900 text-3xl cursor-pointer font-extrabold"
      >
        Logo
      </Link>
      {/* Hamburger goes here */}
      <div className="space-x-7 text-lg">
        <Link to="/home">Home</Link>
        <Link to="/project">Works</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
