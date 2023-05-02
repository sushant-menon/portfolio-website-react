import React from "react";
import AboutMeDetails from "./AboutMeDetails";

const About = () => {
  return (
    <>
      {/* <img
        className=" w-full absolute h-screen md:w-full object-cover blur-sm"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8bJIPHjabBvFNiSSSL-G3PakixuySgo3n7yIrVGgJ224-3ZniOwEeaFsnBuZWPiwFMg&usqp=CAU"
        alt="bg-image"
      /> */}
      <div className="h-screen bg-[hsl(42,27%,19%)] overflow-y-auto">
        <div className="backdrop-blur-sm bg-[#fcf5ea]  relative text-center w-[20rem] mb-5 mx-auto rounded-2xl h-auto py-6 px-4 md:w-[1370px] md:backdrop-blur-md md:px-16 md:py-12 md:mt-20 mt-10">
          <AboutMeDetails />
        </div>
      </div>
    </>
  );
};

export default About;
