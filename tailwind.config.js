/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        background: "#F9F1EF",   // entire page background
        surface: "#F7E7EC",      // alternate section background
        primary: "#1E1E1E",      // main text
        secondary: "#C4C4C4",    // muted text
        accent: "#D7355D",       // highlight/pink
      },
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],        // for body
        allura: ["'Allura'", "cursive"],            // for name
        tangerine: ["'Tangerine'", "cursive"],      // for job title
        mono: ["Fira Code", "monospace"],           // for code
      },
      screens: {
        nav: "738px",
      },
    },
  },
  plugins: [],
};
