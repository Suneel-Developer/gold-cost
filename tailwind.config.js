/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        kavoon: ['"Kavoon"', "cursive"],
        "kelly-slab": ['"Kelly Slab"', "cursive"],
        "roboto-slab": ['"Roboto Slab"', "serif"],
      },
      colors: {
        logocolor: "#FFD700",
        white: "#FFF",
        bg: "#2C2F48",
        active_bg: "#5C55794D",
        dark_text: "#B8B8B8",
        light_bg: "#5C55794D",
        mobile_text: "#444444",
        mobile_bg: "#EAEAEA",
        dark_bg: "rgba(9, 8, 8, 0.67)",
        input_bg: "#1D1B32",
        border: "#989898",
        active_bg: "rgba(92, 85, 121, 0.30)"
      },
    },
  },
  plugins: [],
};
