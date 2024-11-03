/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Extend the default Tailwind theme.
    extend: {
      screens: {
        xs: "320px",
        sm: "460px",
        md: "768px",
        medium: "1125px",
        base: "1250px",
        lg: "1440px",
        xlarge: "1680px",
        xl: "1920px",
        "2xl": "2300px",
      },
      fontFamily: {
        title: ["Inria Sans", "sans-serif"],
        text: ["Onest", "sans-serif"],
      },
      fontSize: {
        primary_title: [
          "64px",
          {
            fontWeight: "400",
          },
        ],
        primary_title_mobile: [
          "48px",
          {
            fontWeight: "400",
          },
        ],
        secondary_title: [
          "48px",
          {
            fontWeight: "400",
          },
        ],
        secondary_title_mobile: [
          "40px",
          {
            fontWeight: "400",
          },
        ],
        tertiary_title: [
          "32px",
          {
            fontWeight: "400",
          },
        ],
        content: [
          "24px",
          {
            fontWeight: "300",
          },
        ],
        buttons: [
          "20px",
          {
            fontWeight: "700",
          },
        ],
        buttons_mobile: [
          "18px",
          {
            fontWeight: "700",
          },
        ],
        small: [
          "20px",
          {
            fontWeight: "300",
          },
        ],
      },
      colors: {
        primary: "#1E1E1E",
        secondary: "#E9C261",
        gray: "#6F6F6F",
        accent: "#FFB700",
        background: "#F5F5F5",
        dark: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
