/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      gray: "rgb(30, 30, 30)",
      sameGray: "rgb(40, 40, 40)",
      blue: "#7292E7",
      green: "#2d9687",
      red: "#FF2147",
      orange: "#E55C32",
      yellow: "#FFB318",
      black: "#1B191B",
      lightGray: "rgb(117, 117, 117)",
      white: "#FFFFFF",
      success: "#28a745",
      warning: "#FFB318",
      error: "#FF2147",
    },
    boxContent: {
      height: "92vh",
      width: "100vw",
      lgHeight: "90vh",
      lgWidth: "100vw",
    },
    navBar: {
      height: "8vh",
      width: "100vw",
      lgHeight: "10vh",
      lgWidth: "100vw",
    },
  },
  plugins: [],
};
