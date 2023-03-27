import React from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

const CardComponent = () => {
  return (
    <div className="bg-green-700 rounded-3xl m-4 p-4 w-full">
      <div className="flex flex-col items-center md:items-start md:flex-row">
        {/* Project details Image , description and tech used */}
        <div className="w-full flex items-center md:items-start md:flex-col flex-col">
          <span className="mx-auto pb-2">The Name</span>
          <span>
            <img
              className="rounded-xl w-[320px] md:w-[400px]"
              src="src\assets\sunset1.jpg"
            />
          </span>
          <span className="mt-3 md:mx-48">
            <Link to="/">Link</Link>
          </span>
        </div>
        {/* description and tech */}
        <div className="mt-7 space-y-6 md:space-y-0 md:flex-col flex flex-col md:ml-4">
          <div className="w-full">
            <h2 className="font-extrabold mb-1 tracking-wide text-black text-center md:text-start md:text-3xl">
              Description:
            </h2>
            <span className="text-sm md:text-xl md:text-start md:tracking-wide tracking-wider text-gray-300 text-center md:leading-loose leading-relaxed">
              <p className="md:mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, ipsum error quos nostrum repellat fugit a natus
                aperiam corporis magnam ad excepturi totam. Sapiente eveniet
                provident possimus veritatis necessitatibus deserunt? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              </p>
            </span>
          </div>
          <div className="text-center font-extrabold mb-1 tracking-wide text-black md:text-start md:text-3xl">
            <h2>Tech Used:</h2>
            <span className="font-bold md:font-light md:text-xl text-gray-300">
              HTML , CSS , JAVASCRIPT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
