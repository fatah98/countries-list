/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        DarkModeElements: "hsl(209, 23%, 22%)",
        DarkModeText: "hsl(0, 0%, 100%)",
        DarkModeBackground: "hsl(207, 26%, 17%)",
        LightModeElements: "hsl(0, 0%, 100%)",
        LightModeText: "hsl(200, 15%, 8%)",
        LightModeInput: "hsl(0, 0%, 52%)",
        LightModeBackground: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
