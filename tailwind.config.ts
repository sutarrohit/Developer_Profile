import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        firstColor: "#fc3d03",
        blackColor: "#000000",
        blackColorLight: "#666666",
        whiteColor: "#f2f2f2",
        titleColor: "#000000",
        textColor: "#595959",
        textColorLight: "#a3a3a3",
        bodyColor: "#dedede",
        containerColor: "#d4d4d4",
        textGray: "#d5d4d500",
      },

      colors: {
        firstColor: "#fc3d03",
        blackColor: "#000000",
        blackColorLight: "#666666",
        whiteColor: "#f2f2f2",
        titleColor: "#000000",
        textColor: "#595959",
        textColorLight: "#a3a3a3",
        bodyColor: "#dedede",
        containerColor: "#d4d4d4",
        textGray: "#d5d4d500",
      },

      animation: {
        moveLeft: "moveLeft 1.5s ease-in-out ",
        moveRight: "moveRight 1.5s ease-in-out",
        ContactMemoveLeft: "ContactMemoveLeft 1.5s ease-in-out ",
        ContactMemoveRight: "ContactMemoveRight 1.5s ease-in-out",
        SkillMove: "SkillMove 2s ease",
        ProjectMove: "ProjectMove 2s ease-in-out",
      },

      keyframes: {
        // HomeComponent
        moveLeft: {
          "0%": {
            left: "-9%",
            opacity: "0%",
          },

          "100%": {
            left: "0%",
            opacity: "100%",
          },
        },

        moveRight: {
          "0%": {
            right: "-9%",
            opacity: "0%",
          },

          "100%": {
            right: "0%",
            opacity: "100%",
          },
        },

        // ContactMe
        ContactMemoveLeft: {
          "0%": {
            left: "-4%",
            opacity: "0%",
            zIndex: "5",
          },

          "100%": {
            left: "0%",
            opacity: "100%",
            zIndex: "5",
          },
        },

        ContactMemoveRight: {
          "0%": {
            right: "-4%",
            opacity: "0%",
          },

          "100%": {
            right: "0%",
            opacity: "100%",
          },
        },

        // Skill
        SkillMove: {
          "0%": {
            scale: "0.5",
            opacity: "0%",
          },
          "100%": {
            scale: "1",
            opacity: "100%",
          },
        },

        // Porject
        ProjectMove: {
          "0%": {
            top: "-6%",
            opacity: "0%",
          },
          "100%": {
            top: "0%",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
function scale(arg0: number): string {
  throw new Error("Function not implemented.");
}
