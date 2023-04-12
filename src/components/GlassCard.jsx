import React from "react";
import CardComponent from "./CardComponent";
import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const GlassCard = () => {
  const project = useContext(ProjectContext);
  // console.log(project, Name);
  return (
    <div className=" m-14 text-white rounded-xl items-center flex justify-center md:mx-auto md:w-[1400px] mb-0 flex-col">
      {project.map((project, id) => {
        return (
          <CardComponent
            key={project.id}
            Name={project.Name}
            Description={project.Description}
            Image={project.Image}
            Tech={project.Tech}
            link={project.Link}
            github={project.Github}
          />
        );
      })}
    </div>
  );
};

export default GlassCard;
