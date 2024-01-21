import React, { useState } from "react";
import { createContext } from "react";

export const ProjectContext = createContext("null");

export const ProjectProvider = props => {
  const [project, setProject] = useState([
    {
      id: 1,
      Name: "Todo List",
      Description:
        "A todo list is a simple tool that helps individuals keep track of tasks or activities that need to be completed within a specific timeframe. It is a list of items that need to be done, organized in a way that allows the user to prioritize tasks based on their importance or urgency.",
      Image:
        "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",
      Tech: ["/HTML.png", "/CSS.png", "/Javascript.png"],
      // Tech2: "src/assets/CSS.png",
      // Tech3: "src/assets/Javascript.png",
      link: "https://todolistvjs.netlify.app/",
      Github: "https://github.com/sushant-menon/todolist-vanillajs",
      Host: "/netlify.png",
    },
    {
      id: 2,
      Name: "E-Kart",
      Description:
        "This project is an e-commerce website that allows users to browse different products, add items to the cart, remove items from the cart, and increase the quantity of items. Additionally, the website provides a filtering feature to enable users to filter products based on the categories.",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdofmGblal9GWOsS3kV8DQXX-HZxcDajGXg&usqp=CAU",
      Tech: [
        "/HTML.png",
        "/CSS.png",
        "/Javascript.png",
        "/React.png",
        `/Tailwind.png`,
      ],

      link: "https://ekarrt.netlify.app/",
      Github: "https://github.com/sushant-menon/E-kart-react",
      Host: "/netlify.png",
    },
    {
      id: 3,
      Name: "Youtube Clone",
      Description:
        "The YouTube clone project aims to replicate the core features of the YouTube platform, allowing users to watch videos, search for videos, view related videos, and read and post comments on videos. The project will utilize the Google API to make the video data dynamic and up-to-date.",
      Image:
        "https://www.billboard.com/wp-content/uploads/2022/10/youtube-logo-2022-billboard-espagnol-1548.jpg",
      Tech: [
        "/HTML.png",
        "/CSS.png",
        "/Javascript.png",
        "/Redux.png",
        "/React.png",
        `/Tailwind.png`,
      ],
      link: "https://sushantytclone.netlify.app/",
      Github: "https://github.com/sushant-menon/youtube-clone-reactVite",
      Host: "/netlify.png",
    },
    {
      id: 4,
      Name: "Portfolio Website",
      Description:
        "This portfolio website was built by a frontend developer using React, HTML, and Tailwind CSS. The website features a clean and modern design with project cards displayed using the Context API. It showcases the developer's skills and projects in a clear and concise manner, providing an excellent overview of their abilities and experience.",

      Image: "https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
      Tech: [
        "/HTML.png",
        "/CSS.png",
        "/Javascript.png",
        "/React.png",
        `/Tailwind.png`,
      ],
      link: "https://sushantm-portfolio.netlify.app",
      Github: "https://github.com/sushant-menon/portfolio-website-react",
      Host: "/netlify.png",
    },
    {
      id: 5,
      Name: "CineFusion",
      Description: `
        CineFusion crafted using Nextjs brings entertainment discovery with the TMDb API. Offering real-time curation of trending and popular movies and TV shows, the platform provides comprehensive details like plot summaries and viewer ratings. Unique to CineFusion is the integrated trailer feature, allowing users to preview content effortlessly.`,
      Image:
        "https://s3-alpha.figma.com/hub/file/1765404342/71d2f9bd-bc20-4e65-9807-5c9c886e7035-cover.png",
      Tech: [
        "/HTML.png",
        "/CSS.png",
        "/Javascript.png",
        "/nextjs.png",
        "/Redux.png",
        `/Tailwind.png`,
        // "/radix-ui.svg",
      ],
      link: "https://cinefusion-nextjs.vercel.app/",
      Github: "https://github.com/sushant-menon/cinefusion-nextjs",
      Host: "/vercel.png",
    },
    {
      id: 6,
      Name: "Paint Your Thoughts",
      Description: `
        Paint Your Thoughts is a vibrant project crafted in Next.js, offering users an immersive digital canvas using Canvas Api. This innovative paint board allows users to unleash their creativity by drawing with various pencil sizes and an extensive color palette. Designed for precision, the tool includes an eraser for quick corrections and a seamless undo/redo feature to navigate through the creative process effortlessly.`,
      Image:
        "https://i.pinimg.com/1200x/f9/49/a9/f949a9533eafac63990781c81e3e630f.jpg",
      Tech: [
        "/HTML.png",
        "/CSS.png",
        "/Javascript.png",
        "/nextjs.png",
        "/Redux.png",
        `/Tailwind.png`,
      ],
      link: "https://paintyourthoughts.vercel.app/",
      Github: "https://github.com/sushant-menon/paintyourthoughts",
      Host: "/vercel.png",
    },
  ]);

  return (
    <ProjectContext.Provider value={project}>
      {props.children}
    </ProjectContext.Provider>
  );
};
