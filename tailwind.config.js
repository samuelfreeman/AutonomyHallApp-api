/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs', // Add this to ensure Tailwind works with your EJS files
    './public/**/*.html',
    './src/**/*.js',
    './nodemodules/flowbite/**/*.js ',
    './public/flowbite/**/*.js ',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
