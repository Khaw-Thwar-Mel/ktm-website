/** @type {import('tailwindcss').Config} */
// const colors = require("@material-ui/core/colors"); // for mui v4

module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
    screens: {
      "xs": "0px",
      "sm": "600px",
      "md": "900px",
      "lg": "1200px",
      "xl": "1536px",
    },
  },
  plugins: [],
};
