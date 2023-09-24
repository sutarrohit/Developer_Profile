"use client";
import React, { useState } from "react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { useTheme } from "next-themes";

import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div id="home">
      <div className="h-20 ">
        <div className="fixed z-20 flex justify-between w-full shadow-lg h-20 px-4 md:px-40 bg-bodyColor dark:bg-black">
          <div className="flex gap-2 items-center">
            <span className="flex justify-center items-center  rounded-full w-8 h-8 bg-blackColor dark:bg-blackColorLight text-whiteColor  font-semibold">
              R
            </span>
            <span className="font-semibold">Rohit Sutar</span>
          </div>

          <div className="flex justify-center items-center gap-4 md:gap-10 font-medium">
            <ul className="hidden md:flex gap-10">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#aboutme">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>

            <div className="hidden md:block  px-3 py-2 bg-blackColor dark:bg-blackColorLight text-whiteColor">
              <button className="">Contact Me</button>
            </div>

            <span
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="text-2xl"
            >
              {resolvedTheme === "dark" ? (
                <MdOutlineWbSunny />
              ) : (
                <MdOutlineDarkMode />
              )}
            </span>

            <span
              className="md:hidden text-lg p-[0.35rem] bg-blackColor dark:bg-blackColorLight text-whiteColor"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <RiMenu4Line />
            </span>
          </div>
        </div>
      </div>
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default Header;
