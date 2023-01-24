const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.page.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Apple SD Gothic Neo"',
        '"Pretendard"',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      colors: {
        gray: {
          100: "#F8FAFB",
          200: "#EEF2F6",
          300: "#DFE3E9",
          400: "#C6CACF",
          500: "#A4AAAE",
          600: "#5F656A",
          700: "#4D5256",
          800: "#2E3032",
          900: "#212121",
        },
        white: {
          DEFAULT: "#FFFFFF",
          dark: "#EFEFEF",
        },
        blue: {
          light: "#e2f4ff",
          DEFAULT: "#c5dbe9",
          dark: "#17406b",
        },
        navy: {
          DEFAULT: "#17406b",
          dark: "#1E3349",
        },
      },
    },
  },
};
