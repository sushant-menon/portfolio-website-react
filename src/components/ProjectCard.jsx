import React from "react";
import { Link } from "react-router-dom";
import { initFlowbite } from "flowbite";

const ProjectCard = ({ prod }) => {
  const { Name, Description, Image, link, Github, Tech } = prod;
  return (
    <div className=" bg-gray-800 shadow-md shadow-white rounded-3xl w-96 px-3 py-3 mt-10 md:mt-24 text-white">
      <div className="flex flex-col items-center w-full space-y-3">
        <img className="rounded-lg" src={Image} alt={Name} />
        <h3 className="text-xl font-extrabold">{prod.Name}</h3>
        <p className="text-center">{Description}</p>
        <span className="flex">
          {/* website */}
          <Link
            to={link}
            target="_blank"
            data-tooltip-target="tooltip-no-arrow"
            type="button"
            class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <img className="w-7 h-7" src="/external-link.svg" alt={link} />
          </Link>
          <div
            id="tooltip-no-arrow"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Website
          </div>
          {/* github */}
          <Link
            to={Github}
            target="_blank"
            data-tooltip-target="tooltip"
            type="button"
            class="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <img src="/github.svg" alt="" />
          </Link>
          <div
            id="tooltip"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Github
          </div>
        </span>
        <span className="border border-black w-full"></span>
        {/* Technology used */}
        <div className="inline-flex items-center w-full justify-evenly">
          <p className="text-xl text-start">Tech :</p>
          {Tech.map((tech, index) => (
            <img className="w-12 h-12" key={index} src={tech} alt={Name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
