/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}", "./index.html", "./src/input.css"],
  theme: {
    fontFamily: {
      Montserrat: [ 'Montserrat', 'sans-serif'],
      inter: ['inter', 'sans-serif'],
      primary: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#734578',
        'background': '#FAE3E9',
        'main': '#DBBDC2',
      },
    },
  },
  plugins: [],
}


// #FAE3E9
// #DBBDC2