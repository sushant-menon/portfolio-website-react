import React from "react";

const AboutMeDetails = () => {
  return (
    <>
      <div>
        <h1 className="font-extrabold text-4xl">About Me</h1>
      </div>

      <div className="flex flex-col mt-16 justify-center items-center">
        <span className="border-2 border-white w-[290px] h-[290px] rounded-md transform hover:scale-95"></span>
        <img
          className="bg-black w-[290px] h-[290px] absolute -translate-x-5 -translate-y-5 rounded-md"
          alt=""
          src="src\assets\Profile.png"
        />
      </div>
    </>
  );
};

export default AboutMeDetails;
