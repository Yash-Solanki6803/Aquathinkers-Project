/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sky-gradient":
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(118,201,255,1) 11%, rgba(0,212,255,1) 100%)",
        "water-gradient-1":
          "linear-gradient(180deg,rgba(255,255,255,0.5) 0%, rgba(115,168,240,1) 2%, rgba(57,133,186,1) 46%, rgba(39,109,154,1) 66%, rgba(14,70,94,1) 100%);",
        "water-gradient-2":
          "linear-gradient(180deg, rgba(14,70,94,1) 0%, rgba(13,53,82,1) 46%, rgba(5,35,55,1) 70%, rgba(2,24,33,1) 100%);",
        "water-gradient-3":
          "linear-gradient(180deg, rgba(2,24,33,1) 0%, rgba(0,0,0,1) 100%);",
      },
      dropShadow: {
        dark: "0px 4px 100px rgba(0, 0, 0, 1)", // Customize the values as needed
        light: "2px 4px 200px rgb(89, 89, 89)", // Customize the values as needed
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
