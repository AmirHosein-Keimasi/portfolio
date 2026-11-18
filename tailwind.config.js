/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vazir)", "Vazir", "var(--font-tanha)", "system-ui", "sans-serif"],
        vazir: ["var(--font-vazir)", "Vazir", "system-ui", "sans-serif"],
        tanha: ["var(--font-tanha)", "Tanha", "var(--font-vazir)", "sans-serif"],
      },
      colors: {
        // Brand & Surface Tokens
        surface: {
          light: "#f8fafc",
          "light-card": "#ffffff",
          dark: "#070b14",
          "dark-card": "#0e1526",
        },
        // Legacy aliases kept for seamless compatibility
        "light-text-main": "#0f172a",
        "light-text-dark": "#020617",
        "light-primary-main": "#f8fafc",
        "light-primary-dark": "#f1f5f9",
        "light-error": "#ef4444",
        "light-info": "#0284c7",
        "light-warning": "#f59e0b",
        "light-success": "#059669",

        "dark-text-dark": "#020617",
        "dark-text-main": "#f1f5f9",
        "dark-primary-dark": "#0e1526",
        "dark-primary-main": "#070b14",
        "dark-error": "#f87171",
        "dark-info": "#38bdf8",
        "dark-warning": "#fbbf24",
        "dark-success": "#10b981",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite reverse",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.04)" },
        },
      },
    },
  },
  plugins: [],
};
