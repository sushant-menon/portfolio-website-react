import React from "react";

const AboutMeDetails = () => {
  return (
    <>
      <div>
        <h1 className="font-extrabold text-4xl">About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse mt-10 md:mt-16 px-3 mx-auto justify-center items-center md:justify-between">
        <span className=" flex justify-center items-center cursor-pointer group-hover:transform hover:scale-95 duration-1000">
          <span className="border-2 border-green-950 w-[290px] h-[290px] rounded-md"></span>
          <img
            className="bg-black w-[290px] h-[290px] absolute -translate-x-3 -translate-y-3 rounded-md"
            alt=""
            src="src\assets\Profile.png"
          />
        </span>

        {/* About me */}
        <div className="flex flex-col">
          <p className="mt-4 font-bold text-justify md:text-2xl md:max-w-3xl text-lg">
            Hey visitor, my name is Sushant Menon. I'm a self taught developer.
            I work mostly on frontend and for which I use technologies like
            HTML, CSS, Javascript and React. I started exploring about web
            development in my final year of engineering. Then I began
            experimenting with HTML and CSS and made quite a few static website
            which made me fall in love with the frontend and that day I decided
            to pursue software engineering as a career.
          </p>
          {/* Education */}
          <div className="md:mt-20 mt-10 flex flex-col">
            <h2 className="text-start font-extrabold text-3xl">Education :</h2>
            <p className=" text-xl text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeDetails;
