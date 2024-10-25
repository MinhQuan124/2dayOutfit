/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "ct-lg": "960px",
        mobile: "450px",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      fontSize: {
        xs4: "16px",
      },
      colors: {
        textColor: "#111111",
        mainBgColor: "#f5f5f5",
        coverLayout: "rgba(17,17,17,0.36)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
