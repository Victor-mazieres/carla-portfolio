/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a26740",      // Doré doux
        secondary: "#e7dacc",    // Beige rosé
        background: "#f1f0ed",   // Fond clair principal
        lightBeige: "#ece3d9",   // Ton plus clair
        neutral: "#dddddd",      // Gris neutre
        darkText: "#3a2e27",     // Texte principal
      },
      fontFamily: {
        logo: ["'TAN Ashford'", "serif"],          // Logo principal
        sublogo: ["Quicksand", "sans-serif"],      // Phrase sous le logo
        title: ["'League Spartan'", "sans-serif"], // Titres de sections
        text: ["'Glacial Indifference'", "sans-serif"], // Texte général
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        subtle: "0 2px 8px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
}
