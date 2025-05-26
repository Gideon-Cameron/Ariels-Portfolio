/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // 🩰 ErinOnDemand-Inspired Palette
        background: "#F9F1EF",   // soft main page background
        surface: "#F7E7EC",      // light pink section background
        soft: "#F7E7EC",         // tan section background
        chocolate: "#5B2C27",    // rich brown headings
        button: "#753D2D",       // deep brown buttons
        richblack: "#2E2E2E",    // soft black text
        primary: "#1E1E1E",      // main default text
        secondary: "#C4C4C4",    // muted or border text
        accent: "#D7355D",       // vibrant pink highlights
      },
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],        // body text
        allura: ["'Allura'", "cursive"],            // name / script
        tangerine: ["'Tangerine'", "cursive"],      // title script
        mono: ["Fira Code", "monospace"],           // code font
        italianno: ["'Italianno'", "cursive"],      // optional flourish
      },
      screens: {
        nav: "738px", // custom breakpoint for navigation collapse
      },
    },
  },
  plugins: [],
};
