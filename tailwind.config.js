/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // 🎨 General Brand Palette
        background: "#F9F1EF",       // soft pink-beige main background
        surface: "#F7E7EC",          // light pink alternate section
        soft: "#F7E7EC",             // reused tan background
        chocolate: "#5B2C27",        // rich brown text / headings
        button: "#753D2D",           // deep brown for buttons
        richblack: "#2E2E2E",        // dark grayish text
        primary: "#1E1E1E",          // fallback for main text
        secondary: "#C4C4C4",        // for muted, border elements
        accent: "#D7355D",           // highlight pink

        // 🌊 Experience Section-Specific Palette (from image)
        experienceBg: "#9FB4B7",       // Muted bluish-gray (background of the left side in your image)
        experienceText: "#2E3E3E",     // Deep, balanced green-gray text color
        experienceCard: "#C7D3D4",  
      },
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],       // body
        allura: ["'Allura'", "cursive"],           // script for name
        tangerine: ["'Tangerine'", "cursive"],     // job title
        mono: ["Fira Code", "monospace"],          // mono/terminal
        italianno: ["'Italianno'", "cursive"],     // flourish branding
      },
      screens: {
        nav: "738px", // custom breakpoint for navbar
      },
    },
  },
  plugins: [],
};
