const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "50vh": "50vh",
        "50vw": "50vw",
      },

      letterSpacing: {
        tightest: "-.075em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        "0.3rem": "0.3rem",
      },
      colors: {
        darkGray: "rgba(223, 223, 223, 0.6)",
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
      },
      height: {
        108: "28rem",
        116: "30rem",
      },
      width: {
        88: "22rem",
        300: "75rem",
      },
      backgroundImage: {
        "mountain-image": "url('/Images/bg-beta.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
