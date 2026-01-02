/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'tanha': ['Tanha', 'Vazir', 'roboto', 'sans-serif'],
      },
      colors: {
        'light-text-main': '#0000009e',
        'light-text-dark': '#3a3c3f',
        'light-primary-main': '#F6F5F2',
        'light-primary-dark': '#38414A',
        'light-error': '#d2d3db',
        'light-info': '#9394a5',
        'light-warning': '#6096B4',
        'light-success': '#93BFCF',
        'dark-text-dark': '#141516',
        'dark-text-main': '#d8e4e1',
        'dark-primary-dark': '#F6F5F2',
        'dark-primary-main': '#38414A',
        'dark-error': '#1A2837',
        'dark-info': '#2B4052',
        'dark-warning': '#445C6D',
        'dark-success': '#367275',
      },
    },
  },
  plugins: [],
}


