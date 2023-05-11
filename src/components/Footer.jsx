import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-yellow-600">
      <span className="flex items-center justify-center py-6 text-white md:text-xl text-lg">
        Handcrafted with
        <img
          className="w-6 h-6 ml-2 mr-2"
          src="https://cdn-icons-png.flaticon.com/512/56/56986.png"
          alt=""
        />
        by{" "}
        <Link
          to="/contact"
          className="ml-2 font-bold underline underline-offset-4 text-white hover:text-gray-400"
        >
          Sushant Menon
        </Link>
      </span>
    </div>
  );
};

export default Footer;
