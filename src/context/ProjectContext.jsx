import React, { useState } from "react";
import { createContext } from "react";

export const ProjectContext = createContext("null");

export const ProjectProvider = props => {
  const [project, setProject] = useState([
    {
      id: 1,
      Name: "Todo-List",
      Description:
        "A todo list is a simple tool that helps individuals keep track of tasks or activities that need to be completed within a specific timeframe. It is a list of items that need to be done, organized in a way that allows the user to prioritize tasks based on their importance or urgency.",
      Image: "src/assets/cole.jpg",
      Tech: [
        "src/assets/HTML.png",
        "src/assets/CSS.png",
        "src/assets/Javascript.png",
      ],
      // Tech2: "src/assets/CSS.png",
      // Tech3: "src/assets/Javascript.png",
      link: "https://todolistvjs.netlify.app/",
      Github: "https://github.com/sushant-menon/todolist-vanillajs",
    },
    {
      id: 2,
      Name: "E-Kart",
      Description:
        "This project is an e-commerce website that allows users to browse different products, add items to the cart, remove items from the cart, and increase the quantity of items. Additionally, the website provides a filtering feature to enable users to filter products based on their categories.",
      Image: "src/assets/cole.jpg",
      Tech: [
        "src/assets/HTML.png",
        "src/assets/CSS.png",
        "src/assets/Javascript.png",
        "src/assets/React.png",
        `src/assets/Tailwind.png`,
      ],

      link: "https://ekarrt.netlify.app/",
      Github: "https://github.com/sushant-menon/E-kart-react",
    },
    {
      id: 3,
      Name: "Youtube Clone",
      Description:
        "The YouTube clone project aims to replicate the core features of the YouTube platform, allowing users to watch videos, search for videos, view related videos, and read and post comments on videos. The project will utilize the Google API to make the video data dynamic and up-to-date.",
      Image: "src/assets/cole.jpg",
      Tech: [
        "src/assets/HTML.png",
        "src/assets/CSS.png",
        "src/assets/Javascript.png",
        "src/assets/React.png",
        "src/assets/Redux.png",
        `src/assets/Tailwind.png`,
      ],
      link: "",
      Github: "",
    },
    {
      id: 3,
      Name: "Portfolio Website",
      Description:
        "This portfolio website was built by a frontend developer using React, HTML, and Tailwind CSS. The website features a clean and modern design with project cards displayed using the Context API. It showcases the developer's skills and projects in a clear and concise manner, providing an excellent overview of their abilities and experience.",
      Image: "src/assets/cole.jpg",
      Tech: [
        "src/assets/HTML.png",
        "src/assets/CSS.png",
        "src/assets/Javascript.png",
        "src/assets/React.png",
        `src/assets/Tailwind.png`,
      ],
      link: "",
      Github: "https://github.com/sushant-menon/portfolio-website-react",
    },
  ]);

  return (
    <ProjectContext.Provider value={project}>
      {props.children}
    </ProjectContext.Provider>
  );
};
