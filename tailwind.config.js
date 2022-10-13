module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal': '#282B35',
        'secondaire': '#5FAEC4',
        'office': '#574c50',
        'accueil': '#F4F3F0',
        'cardcolor': '#00B4D8',
      },
      backgroundImage: {
        'contact': "url('/src/assets/bg-contact.jpg')",
      }
    },
    screens: {
      'sm': '300px',
      // => @media (min-width: 300px) { ... }

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
