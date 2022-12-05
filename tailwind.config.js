/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./partials/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sansArial: ["Arial, Helvetica, sans-serif"],
      sansImpact: ["sans-serif, Arial Narrow Bold, Impact, Haettenschweiler"],
    },
    colors: {
      mainBrown: "#c38c66",
      mainLighterBrown: "#ebbd98",
      mainDarkerBrown: "#c38c66",
      mainGray: "#6f6571",
      mainLighterGray: "#dad8db",
      mainWhiteGray: "#fafafa",
      mainHighlightGray: "#edebed",
      mainDarkerGray: "#5d5360",
      mainBlackGray: "#363038",
      yellow: "	#FFF200",
      blue: "#00a8e1",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
    maxWidth: {
      preview: "200px",
      full: "100%",
    },
    maxHeight: {
      preview: "200px",
      full: "100%",
    },
    animation: {
      "--fa-animation-duration": "0.5s",
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("autoprefixer")],
};
