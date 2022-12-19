/** @type {import('tailwindcss').Config} */

module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f79ead",
          secondary: "#91e858",
          accent: "#b6f963",
          neutral: "#19182A",
          "base-100": "#3D404D",
          info: "#99DFF5",
          success: "#196741",
          warning: "#ECB246",
          error: "#FC3171",
        },
      },
      "light",
      "dark",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./helperComponent/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        skill: "0px 0px 10px 2px",
      },
      dropShadow: {
        titleWhite: "2px 1px 0px #fff",
        titleBlack: "2px 1px 0px #000",
      }, 
      cursor: {
        default:
          "url(https://play.tailwindcss.com/favicons/favicon-16x16.png?v=3), default",
        pointer:
          "url(https://play.tailwindcss.com/favicons/favicon-16x16.png?v=3), pointer",
        hand: "url(https://i.ibb.co/YfDPBNw/hc.png),default",
      },
    },
    // font-family:{ 'Clicker Script', ;}
    fontFamily: {
      clickerScript: ["Clicker Script", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      oleo: ["Oleo Script Swash Caps", "cursive"],
    },
  },
  plugins: [require("daisyui")],
};
