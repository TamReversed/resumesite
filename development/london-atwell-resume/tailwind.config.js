/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "secondary":"#f9f9f9",
        "dark":"#1d1d26",
        "grey-10":"#e3e3e4",
        "grey-50":"#8e8e92",
        "grey-8":"#ededee",
        "grey-60":"#77777d",
        "grey-90":"#33333b"
      }
      
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
};
