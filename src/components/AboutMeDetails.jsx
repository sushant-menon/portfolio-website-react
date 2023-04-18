import React from "react";

const AboutMeDetails = () => {
  return (
    <>
      <div>
        <h1 className="font-extrabold text-4xl">About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse mt-12 md:mt-16 px-3 mx-auto justify-center items-center">
        <span className=" flex justify-center items-center  cursor-pointer group-hover:transform hover:scale-95 duration-1000">
          <span className="border-2 border-green-950 w-[290px] h-[290px] rounded-md"></span>
          <img
            className="bg-black w-[290px] h-[290px] absolute -translate-x-3 -translate-y-3 rounded-md"
            alt=""
            src="src\assets\Profile.png"
          />
        </span>
        <p className="mt-3 font-bold">
          Hey stranger, my name is Sushant Menon. I'm a self taught developer. I
          work mostly on frontend and for which I use technologies like HTML,
          CSS, Javascript and React. I started exploring about web development
          in my final year of Engineering and then started tweaking with html
          and css and made quite a few static website which made me fall in love
          with the frontend and that day I chose to move forward with this and
          pursue this as my career.
        </p>
      </div>
    </>
  );
};

export default AboutMeDetails;
