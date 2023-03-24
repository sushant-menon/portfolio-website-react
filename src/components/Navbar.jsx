import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto bg-cyan-500 p-4">
      <Link to="/" className="text-white text-2xl cursor-pointer">
        Logo
      </Link>
      {/* Hamburger goes here */}
      <div className="space-x-7 text-lg ">
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/tech">Tech</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
