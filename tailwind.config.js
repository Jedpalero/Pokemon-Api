/** @type {import('tailwindcss').Config} */
const colorClasses = ["#6493eb", "#f9cf30", "#f57d31"];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [...colorClasses.map((color) => `bg-${color}`)],
  theme: {
    extend: {
      backgroundImage: {
        pokeball: "url('./src/assets/pokemon-cartoon-minimalist.jpg')",
      },
    },
  },
  plugins: [],
};
