/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "basic-letter": "#ececec",
        "hover-bg": "#313031",
        "hover-letter": "#96f2d7",
        "bg-element": "#1e1e1e",
      },
    },
  },
  plugins: [],
};
