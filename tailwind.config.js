/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          line1: "#fafdf6",
          line2: "#f9f7f1",
          statusbar: "#F5EBE0",
          background: "#F8F7F6",
          button: "#F5EBE0",
          textcolor: "#12121D",
          sidebar: "#12121D14",
          tableheader: "#d5bdaf",

        },
        fontFamily: {
          sans: ["OpenSans"],
        },
      },
    },
  },
  plugins: [],
};