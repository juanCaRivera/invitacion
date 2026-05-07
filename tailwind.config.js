/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: '#54582f',
        gold: '#b8934d',
        'gold-light': '#cfaa60',
      },
      fontFamily: {
        title: ['Cormorant Garamond', 'serif'],
        body: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
