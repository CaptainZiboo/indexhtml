/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15vw': '15vw', // Ajoutez ici la taille personnalisée
        '40vw' : '20vw'
      }
    },
  },
  plugins: [],
}
