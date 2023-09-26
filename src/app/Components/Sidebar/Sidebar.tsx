import React from "react";

interface SidebarPros {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarPros> = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={`fixed z-30 top-0 bottom-0 w-[17rem]  overflow-y-auto text-center text-white bg-black dark:bg-blackColorLight opacity-90 md:hidden ${
        openMenu ? "translate-x-[0px]" : "translate-x-[-300px] "
      }  transition ease-in-out duration-700 `}
    >
      <div className="h-full pt-10 flex flex-col gap-8 ">
        <p className="font-black">Menu</p>
        <div className="flex gap-2 justify-center font-bold">
          <span>------</span>Rohit Sutar<span>------</span>
        </div>
        <div>
          <ul className="flex flex-col gap-4 ">
            <li>
              <a href="#home" onClick={() => setOpenMenu(!openMenu)}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpenMenu(!openMenu)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setOpenMenu(!openMenu)}>
                Skills
              </a>
            </li>
          </ul>
        </div>

        <div
          className=" border px-8 py-1 font-medium mx-auto"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <a href="#contactme" onClick={() => setOpenMenu(!openMenu)}>
            <button>Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
