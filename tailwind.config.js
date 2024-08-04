/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-3": "repeat(auto-fit, minmax(320px, 1fr))",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"'],
      }
    },
  },
  plugins: [],
};
