/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        VerdeClaro: "#038C65",
        VerdeMedio: "#044040",
        VerdeEscuro: "#027368",
        AzulMedio: "#023373",
        AzulEscuro: "#012340",
        AzulClaro: "#033E8C",
        RoxoBoreal: "#6E5773",
        VermelhoClaro: "#D92525",
        VermelhoMedio: "#8C1F28",
        VermelhoEscuro: "#591C21"
      }
    },
  },
  plugins: [],
}

