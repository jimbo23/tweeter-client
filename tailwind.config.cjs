/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1076px",
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontSize: {
        "2xs": "0.75rem", // 12px,
        xs: "0.875rem", // 14px,
        sm: "1rem", // 16px
        md: "1.25rem", // 20px
        lg: "1.5rem", // 24px
        xl: "1.75rem", // 28px
        "2xl": "2rem", // 32px
      },
      flexBasis: {
        "4/10": "40%",
        "6/10": "60%",
      },
      borderRadius: {
        sm: "0.375rem",
        "4xl": "2rem",
      },
      backgroundColor: {
        blue: {
          700: "#2F80ED",
        },
      },
      colors: {
        pink: "#ff49db",
        orange: "#ff7849",
        gray: "#8492a6",
        'bg-gray': '#F2F2F2'
      },
      padding: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
