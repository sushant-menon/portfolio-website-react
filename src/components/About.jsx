import React from "react";

const About = () => {
  return (
    <div className="bg-rose-300 h-screen">
      <div className="container px-6 md:px-16 mx-auto pt-7">
        <div className="flex flex-col md:flex-row-reverse justify-center items-center">
          <span className="rounded-full bg-green-800 w-[450px] h-[450px] mt-[100px] relative"></span>
          <img
            className="absolute rounded-full h-[450px]"
            src="src\assets\Profile.png"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
