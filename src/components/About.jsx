import React from "react";
import AboutMeDetails from "./AboutMeDetails";

const About = () => {
  return (
    <>
      <img
        className=" w-full absolute h-screen md:w-full object-cover blur-sm bg-no-repeat"
        src="https://source.unsplash.com/E8Ufcyxz514/2400x1823"
        alt="bg-image"
      />
      <div className="h-screen overflow-y-auto">
        <div className="backdrop-blur-sm bg-white/30  relative text-center w-[20rem] mb-5 mx-auto rounded-3xl h-auto py-6 px-4 md:w-[1370px] md:backdrop-blur-lg drop-shadow-xl shadow-2xl shadow-black/80 md:px-16 md:py-12 md:mt-20 mt-10">
          <AboutMeDetails />
        </div>
      </div>
    </>
  );
};

export default About;
