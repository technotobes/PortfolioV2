const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx", "public/**/*.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        accent: {
          yellow: "#FDFF90",
          black: "#171717",
        },
        background: {
          darker: "#171717",
        },
      },
    },
    fontFamily: {
      body: ["Poppins"],
      logo: ["Rochester"],
    },
    screens: {
      xs: "475px",
      xxs: "400px",
      ...defaultTheme.screens,
    },
  },
  variants: {},
};
