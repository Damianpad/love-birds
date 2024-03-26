/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#45556B",
        cardCream: '#D9D9D9'
      },
      fontFamily: {
        "eb-garamond": ["EB Garamond", "serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/lb_hero.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
