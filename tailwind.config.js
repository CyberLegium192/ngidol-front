/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  daisyui: {
    themes: ["emerald"],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/line-clamp'),
  ],
  
}