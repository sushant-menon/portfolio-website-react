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
      Link: "https://todolistvjs.netlify.app/",
      Github: "https://github.com/sushant-menon/todolist-vanillajs",
    },
    {
      id: 2,
      Name: "E-Kart",
      Description:
        "E-commerce website which enables you to add your favorite items to the cart and remove it. In this items can also be filtered based on the type.",
      Image: "src/assets/cole.jpg",
      Tech: "Html, css , React",
      Link: "https://ekarrt.netlify.app/",
      Github: "https://github.com/sushant-menon/E-kart-react",
    },
    {
      id: 3,
      Name: "E-commerce",
      Description: "Susu is a good boy",
      Image: "src/assets/cole.jpg",
      Tech: "Html, css , typescript",
      Link: "",
      Github: "",
    },
  ]);

  console.log(project);

  return (
    <ProjectContext.Provider value={project}>
      {props.children}
    </ProjectContext.Provider>
  );
};
