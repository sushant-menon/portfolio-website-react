import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-[#0a192f] h-screen px-6 py-10">
      <div className="container w-full border border-white h-full mx-auto px-3 py-5">
        <div className="flex flex-col w-full mx-auto items-center justify-center min-h-full">
          <p className="text-[#64ffda] text-xl">Say Hello?</p>
          <h1 className="text-[#ccd6f6] text-4xl md:text-5xl font-extrabold tracking-widest md:mt-4 mt-2">
            Get in touch
          </h1>
          <p className="text-[#8892b0] text-lg md:text-xl max-w-md text-center md:max-w-xl md:mt-7 mt-4">
            Looking for a highly skilled web developer? stop searching, this is
            it. I'm available for freelance work too. I'll be happy to
            collaborate on a existing project. Please feel free to send me a
            message to discuss your project. I'll respond within 24 hours. Thank
            you for considering me as a potential collaborator.
          </p>
          <div className="group mt-8">
            <div
              className="button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  "
            >
              <a
                href="mailto:sushantnambiar@gmail.com"
                target="_blank"
                className="flex flex-col justify-center items-center h-full text-white font-bold text-lg "
              >
                E-mail
              </a>
            </div>
          </div>
          {/* social media */}
          <div className="flex flex-row mt-10 space-x-8">
            <Link to="https://github.com/sushant-menon" target="_blank">
              <img
                className="w-8 h-8  p-1"
                src="/github.svg"
                alt="github-image"
              />
            </Link>

            <Link
              to="https://www.linkedin.com/in/sushant-menon-733b2921a/"
              target="_blank"
            >
              <img
                className="w-8 h-8  p-1"
                src="/linkedin (1).svg"
                alt="linkdin-image"
              />
            </Link>
            <Link to="https://twitter.com/SMash_CR" target="_blank">
              <img
                className="w-8 h-8  p-1"
                src="/twitter (1).svg"
                alt="twitter-image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
