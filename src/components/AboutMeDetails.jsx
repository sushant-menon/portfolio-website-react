import React, { useState } from "react";

const HowItStartedText = ` In my second year of Engineering, I was introduced to the programming language "C" without any prior knowledge. However, I didn't invest much effort in understanding its fundamentals and only studied it to pass my exams.

In my third year, I decided to learn C from scratch and gained some knowledge, but I didn't enjoy coding in C. This prompted me to explore other programming languages, taking advantage of my existing language familiarity.

I tried Python but didn't find it appealing either. So, I continued exploring and stumbled upon JavaScript, which completely changed my life. Coding in JavaScript resonated with me deeply, and it became my preferred language due to its logic similarities with other languages. JavaScript had a profound impact on me and solidified my passion for programming.
 I started exploring about web
development in my final year of engineering. Learnt HTML and CSS
from free resources available.After delving into HTML and CSS, I started exploring their potential by creating numerous static websites. It was during this time that my passion for frontend development ignited, solidifying my decision to pursue a career in software engineering.`;

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
      <div className="flex flex-col md:flex-row-reverse mt-10 md:mt-16 mx-auto justify-center items-center md:justify-between">
        <span className=" flex justify-center items-center cursor-pointer group-hover:transform hover:scale-95 duration-700">
          <span className="border-2 border-green-950 w-[190px] h-[190px] md:w-[290px] md:h-[290px]  rounded-md"></span>
          {/* <img
            className="bg-black md:w-[290px] md:h-[290px] w-[190px] h-[190px] absolute -translate-x-3 -translate-y-3 rounded-md"
            alt=""
            src="/Profile.png"
          /> */}
        </span>

        {/* About me */}
        <div className="flex flex-col">
          <p className="mt-4 font-bold text-center md:text-2xl md:max-w-full text-xl md:text-start w-full">
            Hey visitor, my name is Sushant Menon. I'm a self taught developer.
            I majorly work on frontend and for which I use technologies like
            HTML, CSS, Javascript and React. I convert beautiful designs into
            high quality code that produces visually stunning and user-friendly
            websites. Always eager to learn new things.
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
                  <p>Working out and lifting weights</p>
                </span>
                <span className="inline-flex">
                  <li></li>
                  <p>Reading books</p>
                </span>
                <span className="inline-flex">
                  <li></li>
                  <p>Watching documentaries</p>
                </span>
              </div>
            </p>
          </div>

          {/* Technologies used */}

          <div className="md:mt-20 mt-10">
            <h2 className="text-start font-extrabold text-3xl">Technology :</h2>
            <div className="grid grid-cols-4 grid-rows-3 gap-4 mt-5 md:grid-cols-4 items-center">
              <img className="w-12 h-12" src="/HTML.png" alt="html-image" />
              <img className="w-12 h-12" src="/CSS.png" alt="css-image" />
              <img className="w-16 h-16" src="/Javascript.png" alt="js-image" />
              <img className="w-12 h-12" src="/React.png" alt="react-image" />
              <img className="w-12 h-12" src="/Redux.png" alt="redux-image" />
              <img
                className="w-12 h-12"
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                alt="github-image"
              />
              <img
                className="w-20 h-8"
                src="https://www.fullstackpython.com/img/logos/git.png"
                alt="git-image"
              />
              <img
                className="w-12 h-12 mix-blend-screen"
                src="/Tailwind.png"
                alt="tailwind-image"
              />
              <img
                className="w-12 h-7"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"
                alt="npm-image"
              />
              <img
                className="w-22 h-10"
                src="https://user-images.githubusercontent.com/19409/135924939-03845d0b-e7bb-414b-89b6-e627dfa9f614.png"
                alt="parcel-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeDetails;
