const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    fontFamily: {
      montserrat: ['Montserrat'],
      'open-sans': ['Open Sans']
    },
    extend: {
      colors: {
        'tangerine': {
          100: '#FFF6F1',
          200: '#FFE7DB',
          300: '#FFD9C5',
          400: '#FFBD9A',
          500: '#FFA06F',
          600: '#E69064',
          700: '#996043',
          800: '#734832',
          900: '#4D3021',
        },
        'swamp-green': {
          100: '#F2F4F0',
          200: '#DFE2DA',
          300: '#CCD1C4',
          400: '#A6AF98',
          500: '#808C6C',
          600: '#737E61',
          700: '#4D5441',
          800: '#3A3F31',
          900: '#262A20',
        },
      }
    },
  },
  variants: {
    padding: ['responsive', 'last'],
    flexDirection: ['responsive']
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const anchor = {
        '.anchor-stop::before': {
          display: 'block',
          content: " ",
          marginTop: '-285px',
          height: '285px',
          visibility: 'hidden',
          pointerEvents: 'none',
        },
      }
      addComponents(anchor)
    })
  ],
}
