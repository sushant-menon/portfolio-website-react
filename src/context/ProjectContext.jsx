import React, { useState } from "react";
import { createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = () => {
  const [project, setProject] = useState([
    {
      id: 1,
      Name: "TodoList",
      Description: "Sushant is a good boy",
      Image: "src/assets/cole.jpg",
      Tech: "Html, css",
    },
  ]);
  return (
    <ProjectContext.Provider value={project}>
      {props.children}
    </ProjectContext.Provider>
  );
};
