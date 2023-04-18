import React from "react";
import AboutMeDetails from "./AboutMeDetails";

const About = () => {
  return (
    <>
      <div className="">
        <img
          className="absolute h-screen object-cover md:w-full blur-sm"
          src="src\assets\sunset1.jpg"
          alt="bg-image"
        />
      </div>
      <div className=" backdrop-blur-sm bg-white/30 relative text-center mt-4 w-[430px] mx-auto rounded-2xl h-full py-6 px-4 md:w-[1370px] md:backdrop-blur-md md:px-16 md:py-12">
        <AboutMeDetails />
      </div>
    </>
  );
};

export default About;
