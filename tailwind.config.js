/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smaller: "480px",
      small: "640px",
      medium: "768px",
      large: "992px",
      huge: "1200px",
    },
    extend: {
      colors: {
        dark: "#040404",
        pink: "#f7bfba",
        red: "#e62334",
        grey: "#f1f1f1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
