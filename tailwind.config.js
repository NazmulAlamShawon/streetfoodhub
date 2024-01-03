/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#c65102",
        secondaryclr: "#ff6700",
      },
       backgroundColor: {
        'orange-transparent': 'rgba(255, 165, 0, 0.5)',
      },
      container:{
      center: true,
      padding:{
        DEFAULT : '1rem',
        sm:"3rem"
      }
    }
    },
    
  },
  plugins: [],
}

