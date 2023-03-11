/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: "margaret",
      },
      fontSize: {
        "10xl": ["131px", "130px"],
        "12xl": ["200px", "200px"],
      },
    },
  },
  plugins: [],
};
