import React from "react";
import AboutMeDetails from "./AboutMeDetails";

const About = () => {
  return (
    <>
      <div>
        <img
          className=" absolute h-screen md:w-full object-cover blur-sm"
          src="src\assets\sunset1.jpg"
          alt="bg-image"
        />
        <div className="h-screen overflow-y-auto">
          <div className=" backdrop-blur-sm bg-white/30 relative text-center w-[430px] mx-auto rounded-2xl h-auto py-6 px-4 md:w-[1370px] md:backdrop-blur-md md:px-16 md:py-12 md:mt-20 mt-10">
            <AboutMeDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
