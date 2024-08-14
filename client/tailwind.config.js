/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "basic-letter": "#ececec",
        "hover-bg": "#313031",
      },
    },
  },
  plugins: [],
};
