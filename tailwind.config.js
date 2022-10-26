/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ff49ef",

          "secondary": "#c7ed8b",

          "accent": "#4ff283",

          "neutral": "#1E2329",

          "base-100": "#F3F0F4",

          "info": "#84A8E6",

          "success": "#51E194",

          "warning": "#ECAB32",

          "error": "#F06951",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
