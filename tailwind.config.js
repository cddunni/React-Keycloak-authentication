module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'avenir': [ 'Avenir Next', 'sans-serif'],
      'monteserrat': 'Montserrat, sans-serif',
    },
    letterSpacing: {
      widest: '.21em'
    },
    inset: {
      '12': '14px',
      '17': '19px'
    },
    extend: {
      colors: {
        blue: {
          '350': '#79A6F6',
          '400': '#2D74DA'
        },
        gray: {
          '120': 'rgba(0, 0, 0, 0.5)',
          '150': '#E0E0E0'
        },
        black: {
          '100': '#454749'
        }
      },
      spacing: {
        '7': '1.625rem',
        '14': '3.75rem',
        '15': '3.875rem',
        '11': '2.875rem',
        '17': '4.375rem',
        '21': '5.625rem'    
      }
    },
  },
  plugins: [],
}