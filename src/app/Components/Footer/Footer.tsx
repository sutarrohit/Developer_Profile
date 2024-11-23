import React from "react";

const Footer = () => {
  return (
    <div className="h-[10rem] border-t-2 border-textColor flex justify-center">
      <div className="w-full md:w-[80%] flex flex-col-reverse md:flex-row justify-evenly md:justify-around items-center">
        <div>
          <p className="font-bold">
            © Copyright 2024 - Developed by Rohit Sutar. All right reserved.
          </p>
        </div>
        <div className="font-bold ">
          <ul className="flex  gap-8">
            <li>
              <a
                href="#home"
                className="hover:text-black dark:hover:text-white transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-black dark:hover:text-white transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-black dark:hover:text-white transition-all duration-300"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
