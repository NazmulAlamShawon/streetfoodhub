/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ff5B00",
        secondaryclr: "#ff6700",
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

