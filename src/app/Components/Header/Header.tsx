"use client";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "next-themes";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex  justify-center items-center p-4 border border-green-800 h-20 ">
      <div className="flex justify-between w-full md:w-[80%]">
        <div className="border border-red-400  flex gap-1 items-center">
          <span className="flex justify-center items-center border rounded-full w-9 h-9 bg-black text-white first-line:">
            R
          </span>
          <span>Rohit Sutar</span>
        </div>

        <div className="border border-gray-900 flex">
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
          </ul>

          <button className="hidden md:block">Contact Me</button>
          <span
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <MdOutlineDarkMode />
          </span>

          <span className="md:hidden">
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
