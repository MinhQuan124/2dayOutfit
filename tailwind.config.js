/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "ct-lg": "1280px",
        "ct-md": "1010px",
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
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.4s ease-in-out",
        slideOut: "slideOut 0.4s ease-out",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
