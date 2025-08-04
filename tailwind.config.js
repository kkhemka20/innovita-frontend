/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        innovita: "#36b1d2",
      },
       animation: {
    "fade-in": "fadeIn 1s ease-out forwards",
    "fade-in-up": "fadeInUp 1s ease-out forwards",
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    fadeInUp: {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    },
  },
  plugins: [],
}
}