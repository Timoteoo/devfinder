const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx'
  ],
  theme: {
    colors: {
      ...colors,
      'blue-gray': '#1f2b49',
      'light-blue': '#0476fa'
    },
    extend: {},
  },
  plugins: [],
}
