/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1000px",
        1200: "1200px",
        1300: "1300px",
        1400: "1400px",
      },

      fontFamily: {
        roboto: ["Roboto", "Sans-serif"],
      },

      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        "1xl": "20px",
      },

      boxShadow: {
        navShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)",

        homeCardShadow: "0px 10px 40px 0px rgba(0, 0, 0, 0.05);",
      },

      backgroundImage: {
        homeWisdomAndInspirationMobile:
          "linear-gradient(190deg, rgba(249,249,249,1) 40%, rgba(241,219,237,1) 60%, rgba(252,242,236,1) 100%);",

          homeWisdomAndInspirationPC:
          "linear-gradient(-190deg, rgba(249,249,249,1) 40%, rgba(241,219,237,1) 60%, rgba(252,242,236,1) 100%);",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
