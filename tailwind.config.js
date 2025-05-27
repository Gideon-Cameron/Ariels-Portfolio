/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        cream: "#F9F3F1",            // 🌸 New background for Experience
        creamHighlight: "#EFE7E3", 

        // 🌊 Experience Section-Specific Palette
        experienceBg: "#9FB4B7",       // Muted bluish-gray (left panel bg)
        experienceText: "#2E3E3E",     // Balanced dark text
        experienceCard: "#C7D3D4",     // Tab highlight bg
      },
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
        allura: ["'Allura'", "cursive"],
        tangerine: ["'Tangerine'", "cursive"],
        mono: ["Fira Code", "monospace"],
        italianno: ["'Italianno'", "cursive"],
        playpen: ["'Playpen Sans'", "cursive"],
      },
      screens: {
        nav: "738px", // custom breakpoint for navbar
      },
    },
  },
  plugins: [],
};
