import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const project = useContext(ProjectContext);
  console.log(project);

  return (
    <>
      <div className="bg-[#0a192f] h-full py-8 px-2">
        <div className="h-screen overflow-y-auto">
          <div className=" container px-2 py-5 h-full md:h-screen md:w-full mx-auto w-[21rem]">
            <h1 className="text-5xl font-bold text-center text-white ">
              My Projects
            </h1>
            <div className="flex relative flex-col md:justify-around justify-between items-center flex-wrap md:flex-row md:items-stretch">
              {/* Cards goes here */}
              {project.map(prod => {
                return <ProjectCard prod={prod} key={prod.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
