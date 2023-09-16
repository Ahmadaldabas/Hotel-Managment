/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryHeading: ["primary-heading"],
        primaryFont: ["primary"],
      },
    },
  },
  plugins: [],
};
