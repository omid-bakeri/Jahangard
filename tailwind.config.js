/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('public/assets/images/pexels-photo-3278215.jpeg')",
      },
    },
  },
  fontFamily: ["iransans-black", "sans-serif"],
  plugins: [],
};
