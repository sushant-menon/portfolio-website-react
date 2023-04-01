import React from "react";

const Home = () => {
  return (
    <div className="bg-rose-300 h-screen">
      <div className="container px-6 md:px-16 mx-auto pt-7">
        <div className="flex flex-col md:flex-row-reverse justify-center items-center space-y-10 mx-auto md:space-y-0 md:justify-around md:mt-24">
          <span className="rounded-full bg-green-500 w-[300px] h-[300px] mt-[50px] relative">
            <img
              className="absolute rounded-full w-96"
              src="src\assets\3d-cartoon-lumberjack-character-removebg-preview.png"
            />
          </span>
          <div>
            <h2 className="font-extrabold text-5xl max-w-md text-center md:hidden">
              Hi, I'm Sushant Menon
              {/* for large screens */}
            </h2>
            <span className="hidden md:block">
              <h2 className=" text-xl max-w-md text-start">
                Hi, my name is...
              </h2>
              <p className="text-center font-extrabold text-6xl max-w-2xl">
                Sushant Menon
              </p>
            </span>
            <p className="font-bold text-2xl mt-4 text-center">
              A Frontend Developer
            </p>
            <p className="font-bold text-2xl text-center">
              I like to turn design into reality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
