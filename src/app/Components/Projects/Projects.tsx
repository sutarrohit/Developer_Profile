"use client";
import React from "react";
import Image from "next/image";
import { BiLogoGithub } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import project1 from "../../img/project-1.jpg";
import NotiFly from "../../img/notifly.png";
import GoCourse from "../../img/GoCourse.png";
import movieInfo from "../../img/movieInfo.png";
import DevProfile from "../../img/DevProfile.png";
import chatGPT from "../../img/chatGPT.png";
import nftMarketplace from "../../img/nft.png";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: projectRef, inView: projectVisible } = useInView();

  const projectData = [
    {
      image: NotiFly,
      projectName: "NotiFly",
      description:
        "Notifly is a crypto notification platform designed to deliver real-time cryptocurrency price notifications.",
      github: "https://github.com/sutarrohit/NotiFly",
      website: "https://noti-fly-web.vercel.app/",
    },
    {
      image: GoCourse,
      projectName: "Go Course",
      description:
        "GoCourse is a modern and feature-rich online platform designed for selling and purchasing courses.User have multiple courses to buy.",
      github: "https://github.com/sutarrohit/GoCourse_Frontend",
      website: "https://go-course-frontend.vercel.app/",
    },
    {
      image: movieInfo,
      projectName: "Movie Info",
      description:
        "Movie App is a web application that allows users to browse and search for movies by genre and category, as well as view cast information and ratings.",
      github: "https://github.com/sutarrohit/MovieInfo",
      website: "https://movie-info-sand.vercel.app/",
    },
    {
      image: nftMarketplace,
      projectName: "NFT Marketplace",
      description:
        "NFT Marketplace allows users to create, buy, list and sell non-fungible tokens (NFTs) on the Ethereum and EVM compatible blockchains.",
      github: "https://github.com/sutarrohit/Full-Stack-NFTMarketplace",
      website: "https://full-stack-nft-marketplace-rtlx.vercel.app/",
    },
    {
      image: chatGPT,
      projectName: "Chat-GPT Clone",
      description:
        "This project is a clone of the ChatGPT language model, which is based on the GPT-3.5 architecture developed by OpenAI.",
      github: "https://github.com/sutarrohit/ChatGPT",
      website: "https://chat-gpt-sutarrohit.vercel.app/",
    },
    {
      image: project1,
      projectName: "Express Server",
      description:
        "This project contains a sample code that demonstrates how to build an API server using Express.js and TypeScript.",
      github: "https://github.com/sutarrohit/ExpressUsingTypescript",
      website: "https://github.com/sutarrohit/ExpressUsingTypescript",
    },
    {
      image: DevProfile,
      projectName: "Dev Profile",
      description:
        "This is a simple profile website to showcase developer professional information, skills, projects, and contact details.",
      github: "https://github.com/sutarrohit/DevProfile",
      website: "https://dev-profile-nu.vercel.app/",
    },
  ];

  return (
    <div className="relative min-h-[110vh] flex justify-center">
      <div id="projects" className=" w-full md:w-[80%]">
        <h1
          ref={projectRef}
          className={`relative text-center mt-[6rem] font-bold text-5xl ${
            projectVisible ? "animate-ContactMemoveLeft" : ""
          }`}
        >
          Projects
        </h1>

        <div className=" relative grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 px-8">
          {projectData.map((element, key) => {
            return (
              <div
                className={`relative hover:bg-white hover:shadow-lg p-3 min-h-[20rem]  dark:hover:bg-blackColorLight  hover:border-none transition ease-in-out duration-200 ${
                  projectVisible ? "animate-ProjectMove" : ""
                }`}
                key={key}
              >
                <Image src={element.image} alt="card" width={350} height={350} className="h-[10rem]" />
                <a href={element.website} target="_blank">
                  <h4 className="font-bold my-2 hover:text-firstColor ">{element.projectName}</h4>
                </a>

                <p>{element.description}</p>
                <div className="flex gap-2 text-[1.4rem] mt-2 ">
                  <span className="hover:text-firstColor">
                    <a href={element.github} target="_blank">
                      <BiLogoGithub />
                    </a>
                  </span>
                  <span className="hover:text-firstColor">
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
