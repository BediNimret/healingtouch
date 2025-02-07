/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    fontFamily: {
      freestyle: '"Freestyle Script"',
    },
    screens: {
      large: { min: "1130px" },
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
