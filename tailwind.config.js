/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        mainText: "#1f2933",
        primary: "#0b7285",
        secondary: "#2f4858",
        third: "#e66d0a",
        accent: "#f0f4f8",
        mainLight: "#e9f0f5",
        border: "#d4dee6",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
