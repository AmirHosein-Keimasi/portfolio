/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        tanha: ["Tanha", "Vazir", "roboto", "sans-serif"],
      },
      colors: {
        // Light Mode - Modern Elegant Palette (Soft & Clean)
        "light-text-main": "#1e293b",
        "light-text-dark": "#0f172a",
        "light-primary-main": "#faf8f3",
        "light-primary-dark": "#f5f3ed",
        "light-error": "#ef4444",
        "light-info": "#3b82f6",
        "light-warning": "#f59e0b",
        "light-success": "#10b981",

        // Dark Mode - Modern Rich Palette (Deep & Vibrant)
        "dark-text-dark": "#020617",
        "dark-text-main": "#f1f5f9",
        "dark-primary-dark": "#334155",
        "dark-primary-main": "#0f172a",
        "dark-error": "#ef4444",
        "dark-info": "#3b82f6",
        "dark-warning": "#f59e0b",
        "dark-success": "#10b981",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(16, 185, 129, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(16, 185, 129, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
