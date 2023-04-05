import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import GlassCard from "./GlassCard";

const Projects = () => {
  return (
    <div className="bg-teal-400 h-auto">
      <div className="flex">
        <GlassCard />
      </div>
    </div>
  );
};

export default Projects;
