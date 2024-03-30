/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      light: '#b7bac1',
      black: "#000",
      transparent: "transparent",
      primary: "#151c2c",
      secondary: "#182237",
      gray: '#2E374A',
      success: "#39A66C",
      danger: "#a63939",
      info: "#2789ce",
      pink: "#8884D8",
    },
    extend: {},
  },
  plugins: [],
};