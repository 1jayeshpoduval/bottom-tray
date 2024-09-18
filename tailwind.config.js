/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "rgba(12, 12, 12, 1)",
          900: "rgba(18, 18, 18, 1)",
          850: "rgba(26, 26, 26, 1)",
          800: "rgba(32, 32, 32, 1)",
          700: "rgba(34, 34, 34, 1)",
        },
      },
    },
  },
  plugins: [],
};
