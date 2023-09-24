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
      },
    },
  },
  plugins: [],
};
export default config;
