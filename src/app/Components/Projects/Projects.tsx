import React from "react";
import Image from "next/image";
import { BiLogoGithub } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";

import cardImg from "../../img/project-1.jpg";

const Projects = () => {
  const projectData = [
    {
      image: cardImg,
      projectName: "Go Course",
      description:
        "GoCourse is a modern and feature-rich online platform designed for selling and purchasing courses.User have multiple courses to buy",
      github: "https://github.com/sutarrohit/GoCourse_Frontend",
      website: "https://go-course-frontend.vercel.app/",
    },
    {
      image: cardImg,
      projectName: "Movie Info  ",
      description:
        "Movie App is a web application that allows users to browse and search for movies by genre and category, as well as view cast information and ratings.",
      github: "https://github.com/sutarrohit/MovieInfo",
      website: "https://movie-info-sand.vercel.app/",
    },
    {
      image: cardImg,
      projectName: "NFT Marketplace",
      description:
        "NFT Marketplace allows users to create, buy, list and sell non-fungible tokens (NFTs) on the Ethereum and EVM compatible blockchains",
      github: "https://github.com/sutarrohit/Full-Stack-NFTMarketplace",
      website: "https://full-stack-nft-marketplace-rtlx.vercel.app/",
    },
    {
      image: cardImg,
      projectName: "Chat-GPT Clone",
      description:
        "This project is a clone of the ChatGPT language model, which is based on the GPT-3.5 architecture developed by OpenAI.",
      github: "https://github.com/sutarrohit/ChatGPT",
      website: "https://chat-gpt-sutarrohit.vercel.app/",
    },
    {
      image: cardImg,
      projectName: "Express Server",
      description:
        "This project contains a sample code that demonstrates how to build an API server using Express.js and TypeScript.",
      github: "https://github.com/sutarrohit/ExpressUsingTypescript",
      website: "https://github.com/sutarrohit/ExpressUsingTypescript",
    },
    {
      image: cardImg,
      projectName: "Dev Profile",
      description:
        "This is a simple profile website to showcase developer professional information, skills, projects, and contact details.",
      github: "https://github.com/sutarrohit/DevProfile",
      website: "https://dev-profile-nu.vercel.app/",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen border border-green-500 flex justify-center"
    >
      <div className="border w-full md:w-[80%]">
        <h1 className="text-center mt-[6rem] font-bold text-5xl">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 px-8">
          {projectData.map((element, key) => {
            return (
              <div
                className="hover:bg-white hover:shadow-lg p-3 min-h-[20rem] transition ease-in-out duration-300 dark:hover:bg-blackColorLight"
                key={key}
              >
                <Image src={element.image} alt="card" />
                <a href={element.website} target="_blank">
                  <h4 className="font-bold my-2">{element.projectName}</h4>
                </a>

                <p>{element.description}</p>
                <div className="flex gap-2 text-[1.4rem] mt-2">
                  <span>
                    <a href={element.github} target="_blank">
                      <BiLogoGithub />
                    </a>
                  </span>
                  <span>
                    <a href={element.website} target="_blank">
                      <CgWebsite />
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
