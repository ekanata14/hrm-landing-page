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
    },
    },
    fontFamily: {
      poppins: 'Poppins'
    }
  },
  plugins: [],
}

