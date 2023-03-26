import React from "react";
import { Link } from "react-router-dom";

const CardComponent = () => {
  return (
    <div className="bg-green-700 rounded-md m-4 p-4 w-full">
      <div className="flex flex-col items-center md:items-start md:flex-row">
        {/* Project details Image , description and tech used */}
        <div className="w-full flex items-center md:items-start md:flex-col flex-col">
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
        <div className="mt-7 space-y-6 md:space-y-0 md:mt-0 md:flex-col md:flex md:items-start">
          <div className="w-full">
            <h2 className="font-extrabold mb-1 tracking-wide text-black text-center md:text-start">
              Description:
            </h2>
            <span className="text-sm tracking-wider text-gray-300 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, ipsum error quos nostrum repellat fugit a natus
                aperiam corporis magnam ad excepturi totam. Sapiente eveniet
                provident possimus veritatis necessitatibus deserunt?
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
