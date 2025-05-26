/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // 🚫 Disable dark mode
  theme: {
    extend: {
      colors: {
        // 🎨 ErinOnDemand color palette
        background: "#FDF9F7",        // soft warm background
        surface: "#F7E7EC",           // light pink contrast section
        primary: "#1E1E1E",           // main text color
        secondary: "#C4C4C4",         // muted text, lines, borders
        accent: "#D7355D",            // highlight pink for buttons/links
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      screens: {
        nav: "738px",
      },
    },
  },
  plugins: [],
};
