module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'grid-template-rows': 'repeat(2, minmax(0, 1fr))',
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
