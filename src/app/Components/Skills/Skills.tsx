import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiCsswizardry,
  SiTailwindcss,
  SiRedux,
  SiDocker,
  SiKubernetes,
  SiHiveBlockchain,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs, TbBrandHtml5 } from "react-icons/tb";

const Skills = () => {
  const skillData = [
    {
      name: "JavaScript",
      image: SiJavascript,
    },
    {
      name: "TypeScript",
      image: SiTypescript,
    },
    {
      name: "React",
      image: SiReact,
    },
    {
      name: "Next.js",
      image: TbBrandNextjs,
    },
    {
      name: "Node.js",
      image: TbBrandNodejs,
    },
    {
      name: "Express.js",
      image: SiExpress,
    },
    {
      name: "MongoDB",
      image: SiMongodb,
    },
    {
      name: "PostgreSQL",
      image: SiPostgresql,
    },
    // {
    //   name: "Prisma",
    //   image: SiJavascript,
    // },
    {
      name: "Html",
      image: TbBrandHtml5,
    },
    {
      name: "CSS",
      image: SiCsswizardry,
    },
    {
      name: "Tailwind",
      image: SiTailwindcss,
    },
    {
      name: "ReduxToolkit",
      image: SiRedux,
    },
    {
      name: "Docker",
      image: SiDocker,
    },
    {
      name: "Kubernetes",
      image: SiKubernetes,
    },
    {
      name: "Blockchain",
      image: SiHiveBlockchain,
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen border border-red-700 flex justify-center"
    >
      <div className=" w-full md:w-[80%] border border-pink-600">
        <div className="text-center mt-[6rem] font-bold text-[3rem]">
          Skills
        </div>
        <div className=" flex items-center justify-center m-6 md:mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-4 md:gap-8">
            {skillData.map((element, key) => {
              return (
                <div
                  className="border-2 border-blackColorLight w-[125px] h-[99px] flex flex-col justify-center items-center gap-3 hover:bg-white hover:border-none dark:hover:bg-textColor dark:hover:text-white transition-all duration-300 "
                  key={key}
                >
                  <div className="text-4xl">
                    {React.createElement(element.image)}
                  </div>

                  <h1 className="font-bold">{element.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
