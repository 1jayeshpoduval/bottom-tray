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
        "hot-pink": "rgba(181, 23, 158, 1)",
        "all-yellow": "rgba(255, 195, 0, 1)",
        "kinda-turquoise": "rgba(82, 183, 136, 1)",
      },
      width: {
        "90%": "90%",
        "380px": "380px",
        "50px": "50px",
      },
      margin: {
        "190px": "190px",
      },
      maxWidth: {
        "20%": "20%",
      },
      height: {
        "180px": "180px",
        "450px": "450px",
        "5px": "5px",
      },
      borderRadius: {
        "4xl": "32px",
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
