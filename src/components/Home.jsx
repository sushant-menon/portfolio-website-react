import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="md:bg-gradient-to-r from-[#ffd89b]  to-[#19547b] h-full md:h-screen bg-gradient-to-b">
      <div className="container px-6 md:px-16 mx-auto pt-7">
        <div className="flex flex-col md:flex-row-reverse justify-center items-center space-y-10 mx-auto md:space-y-0 xl:justify-around md:items-end xl:items-center md:mt-24 relative">
          <span className="rounded-full bg-black w-[300px] h-[300px] mt-[50px] relative md:w-[450px] md:h-[270px] xl:w-[450px] xl:h-[450px] ">
            <img
              className="absolute rounded-full w-96 xl:w-[450px] xl:h-[450px] md:w-[550px] md:h-[270px]"
              src="/3d-cartoon-lumberjack-character-removebg-preview.png"
            />
          </span>
          <div className="space-y-7">
            <h2 className="font-extrabold text-5xl max-w-md text-center md:hidden">
              Hi there, I'm Sushant Menon
            </h2>
            {/* for large screens */}
            <span className="hidden md:block">
              <h2 className=" text-xl max-w-md text-start">
                Hi, my name is...
              </h2>
              <p className="text-center md:text-start font-extrabold text-6xl max-w-2xl">
                Sushant Menon
              </p>
            </span>
            <p className="font-bold text-2xl mt-4 text-center md:text-start">
              A Frontend Developer
            </p>
            <p className="font-bold text-2xl text-center md:text-start">
              I like to turn ideas into product
            </p>
            <span className="flex md:space-x-3 mt-8 flex-col items-center space-y-8 md:flex-row md:space-y-0 space-x-0 pb-5">
              <Link
                to="/about"
                className="font-bold bg-blue-200 hover:bg-blue-300 px-3 py-2 rounded-xl"
              >
                Who am I?
              </Link>
              <Link
                to="/project"
                className="font-bold bg-blue-200 px-3 py-2 rounded-xl"
              >
                Projects
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
