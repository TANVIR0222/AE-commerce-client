/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d62492",
        secondary: "#ffffff",
        price: "#d62492",
        link: "#d62492",
        textPrimary: "#000",
        textSecondary: "#000",
      },
    },
  },
  plugins: [],
}