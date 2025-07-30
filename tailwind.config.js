/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "homeBg" : "url('/assets/HeroBg.jpg')"        
      },
      colors: {
  primary: "#1e293b",      
  secondary: "#facc15",   
  tertiary: "#d97706",     
  dark: "#0f172a",         
  light: "#f1f5f9"     
}
    },
  },
  plugins: [],
}

