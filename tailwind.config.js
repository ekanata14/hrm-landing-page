/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
      'blue' : '#2E3192',
      'lightBrown' : '#D9C975',
      'ramadhan-primary' : '#FCF2E6',
      'ramadhan-secondary' : '#F1B049',
      'ramadhan-green' : '#739072'
    },
    },
    fontFamily: {
      poppins: 'Poppins'
    }
  },
  plugins: [require("daisyui")],
}

