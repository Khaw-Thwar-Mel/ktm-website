/** @type {import('tailwindcss').Config} */
// const colors = require("@material-ui/core/colors"); // for mui v4

module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
