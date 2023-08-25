/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      grayscale: {
        50: "50%",
      },
      minHeight: {
        120: "480px",
      },
      maxHeight: {
        120: "480px",
      },
      minWidth: {
        100: "400px",
        80: "320px",
      },
      borderWidth: {
        1: "1px",
      },
      maxWidth: {
        90: "360px",
      },
    },
  },
  plugins: [],
};
