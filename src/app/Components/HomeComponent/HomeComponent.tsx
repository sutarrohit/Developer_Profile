import React from "react";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import homeImg from "../../img/IMG_8756 copy.jpg";
import curveImg from "../../img/curved-arrow.svg";
import randomImg from "../../img/random-lines.svg";

const HomeComponent = () => {
  return (
    <div className="relative min-h-[90vh] border border-red-500 flex justify-center ">
      <div className=" w-[100%] md:w-[80%] m border border-yellow-500 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
        <div className="border border-pink-700 flex flex-col justify-center items-center  md:h-[90vh]">
          <h1 className="text-[2.2rem] md:text-[3rem] font-bold text-blackColor dark:text-white border">
            Rohit Stuar
          </h1>
          <p className=" w-[95%] md:w-[80%] border mt-4 md:ml-[14rem] font-normal md:text-[1.1rem] hidden md:block">
            <span className="font-bold text-2xl">Full Stack Developer </span>{" "}
            I'm a full-stack developer with expertise in both frontend and
            backend technologies. With a keen eye for user-centric design and a
            knack for robust backend architecture.
          </p>
        </div>

        {/* right */}
        <div className="border border-pink-700 flex justify-center items-center">
          <div className="relative flex flex-col md:flex-row justify-center items-center border ">
            <div>
              <div className="absolute top-2 mt-3 ml-4 border-[0.4rem] md:border-[0.5rem]  border-black dark:border-bodyColor w-[15rem] md:w-[18rem] h-[18.6rem] md:h-[22.5rem]"></div>
              <Image
                src={homeImg}
                alt="image"
                width={350}
                height={300}
                className="relative w-[15rem] md:w-[18rem] h-auto z-2"
              />

              <Image
                src={curveImg}
                alt="image"
                width={100}
                height={100}
                className="absolute  top-[1rem] right-[28rem] hidden md:block"
              />
              <Image
                src={randomImg}
                alt="image"
                width={60}
                height={500}
                className="absolute top-[12rem] md:top-[20rem] right-[-2rem] md:right-[28rem]"
              />
            </div>

            <div className="geometric-box absolute right-[14rem] top-[8rem] md:top-[11rem] md:right-[21.4rem]"></div>

            <div className="text-4xl flex flex-row md:flex-col mt-[3rem] md:mt-0 gap-6 md:gap-2 ml-9">
              <a href="https://github.com/sutarrohit" target="_blank">
                <FaGithubSquare />
              </a>
              <a
                href="https://linkedin.com/in/rohit-sutar-89687a1b6"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/imSrohitS" target="_blank">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="  md:w-[80%] border mt-4 md:ml-[14rem] font-normal md:text-[1.1rem] md:hidden">
            <span className="font-bold text-2xl">Full Stack Developer </span>{" "}
            I'm a full-stack developer with expertise in both frontend and
            backend technologies. With a keen eye for user-centric design and a
            knack for robust backend architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
