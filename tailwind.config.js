module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal': '#63D471',
        'secondaire': '#0F4F49',
        'office': '#574c50',
        'accueil': '#F4F3F0',
        'cardcolor': '#00B4D8',
        'secondairecard': '#9FA4AD',
        'error': '#F37878',
      },
      backgroundImage: {
        'contact': "url('/src/assets/contact.jpg')",
      }
    },
    screens: {
      'sm': '300px',
      // => @media (min-width: 300px) { ... }

      'ms' : '576px',

      'md': '1050px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
