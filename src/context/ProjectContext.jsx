import React, { useState } from "react";
import { createContext } from "react";

export const ProjectContext = createContext("null");

export const ProjectProvider = props => {
  const [project, setProject] = useState([
    {
      id: 1,
      Name: "Todo-List",
      Description:
        "A to-do list is a simple tool that helps individuals keep track of tasks or activities that need to be completed within a specific timeframe. It is a list of items that need to be done, organized in a way that allows the user to prioritize tasks based on their importance or urgency.",
      Image: "src/assets/cole.jpg",
      Tech: "Html, css",
    },
    {
      id: 2,
      Name: "YT-Clone",
      Description: "Sushant is a bitch ass boy",
      Image: "src/assets/sunset1.jpg",
      Tech: "Html, css , React",
    },
    {
      id: 3,
      Name: "E-commerce",
      Description: "Susu is a good boy",
      Image: "src/assets/cole.jpg",
      Tech: "Html, css , typescript",
    },
  ]);

  console.log(project);
  return (
    <ProjectContext.Provider value={project}>
      {props.children}
    </ProjectContext.Provider>
  );
};