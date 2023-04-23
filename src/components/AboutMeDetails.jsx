import React, { useState } from "react";

const HowItStartedText = ` I was in my 2nd year of Engineering when I was first introduced to a programming language that was "C" and before that I had zero
knowledge about any language.Although in college I only studied C
language for clearing the semester, never took it seriously to
understand the fundamentals.So in 3rd year I tried to learn the fundamentals from scratch and gained a little knowledge in C. But I never enjoyed writing
code in C. So I started exploring for other programming languages
to learn because I had a added advantage of already knowing a
language. It's easy to pick up any other language just some
difference of syntax and the logic remains same.Tried python, failed. I
didn't enjoyed writing code in python either, started exploring
more programming language and this time the language which I found
changed my life for good and that was javascript. I started exploring about web
development in my final year of engineering. Learnt HTML and CSS
from free resources available.Then I began experimenting with HTML
and CSS and made quite a few static website which made me fall in
love for the frontend and that day I decided to pursue software
engineering as a career.`;

const AboutMeDetails = () => {
  const [fullText, setFullText] = useState("false");

  const toggleButton = () => {
    setFullText(!fullText);
  };

  return (
    <>
      <div>
        <h1 className="font-extrabold text-4xl">About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse mt-10 md:mt-16 px-3 mx-auto justify-center items-center md:justify-between">
        <span className=" flex justify-center items-center cursor-pointer group-hover:transform hover:scale-95 duration-700">
          <span className="border-2 border-green-950 w-[290px] h-[290px] rounded-md"></span>
          <img
            className="bg-black w-[290px] h-[290px] absolute -translate-x-3 -translate-y-3 rounded-md"
            alt=""
            src="src\assets\Profile.png"
          />
        </span>

        {/* About me */}
        <div className="flex flex-col">
          <p className="mt-4 font-bold text-center md:text-2xl md:max-w-3xl text-xl md:text-start">
            Hey visitor, my name is Sushant Menon. I'm a self taught developer.
            I work mostly on frontend and for which I use technologies like
            HTML, CSS, Javascript and React. I make websites.
          </p>
          {/* Education */}
          <div className="md:mt-20 mt-10 flex flex-col">
            <h2 className="text-start font-extrabold text-3xl">Education :</h2>
            <p className=" text-xl text-start mt-2 md:max-w-3xl  font-bold">
              I am a Computer Science Engineer from Nagpur University, where I
              earned my Bachelor of Engineering degree with Distinction. During
              my time at university, I gained a solid foundation in computer
              science and software engineering.
            </p>
          </div>
          {/* How it started */}
          <div className="md:mt-20 mt-10 flex flex-col">
            <h2 className="text-start font-extrabold text-3xl">
              How it all started? :
            </h2>
            <p className="text-xl text-start mt-2 md:max-w-3xl font-bold">
              {!fullText
                ? `${HowItStartedText}`
                : `${HowItStartedText?.slice(0, 201)}...`}
            </p>
            <button
              onClick={toggleButton}
              className="mt-2 font-bold text-blue-900 hover:text-blue-700 focus:outline-none text-start"
            >
              {fullText ? "Read More" : "Show Less"}
            </button>
          </div>

          {/* Hobbies*/}

          <div className="md:mt-20 mt-10 flex flex-col">
            <h2 className="text-start font-extrabold text-3xl">Hobbies :</h2>
            <p className=" text-xl text-start mt-2 md:max-w-3xl font-bold">
              <div className="flex flex-col space-y-2">
                <span className="inline-flex">
                  <li></li>
                  <p>Lifting weights</p>
                </span>
                <span className="inline-flex">
                  <li></li>
                  <p>Reading books</p>
                </span>
                <span className="inline-flex">
                  <li></li>
                  <p>Watching documentaries</p>
                </span>
                <span className="inline-flex">
                  <li></li>
                  <p>Listening hip-hop/rap music</p>
                </span>
              </div>
            </p>
          </div>

          {/* Technologies used */}

          <div className="md:mt-20 mt-10 flex flex-col">
            <h2 className="text-start font-extrabold text-3xl">Technology :</h2>
            <p className=" text-xl text-start mt-2 md:max-w-3xl  font-bold">
              HTML CSS JS REACT GIT GITHUB
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeDetails;
