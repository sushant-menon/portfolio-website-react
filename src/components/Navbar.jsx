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
      {/* Hamburger goes here */}
      <div className="space-x-7 text-lg text-white">
        <Link to="/home">Home</Link>
        <Link to="/project">Works</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
