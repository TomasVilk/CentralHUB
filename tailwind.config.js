module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        left: 'left',
      },
      fontFamily: {
        catamaran: ['Catamaran'],
      },
      boxShadow: {
        xd: '0px 2px 4px 0px rgba(0, 0, 0, 0.5)',
        insetXD: 'inset 0px 0px 15px 0px rgba(0, 0, 0, 0.35)',
      },
      dropShadow: {
        hmm: '0 3px 2px rgba(0, 0, 0, 0.35)',
      },
      backgroundColor: {
        dark: '#232323',
        dark50: '#333333',
        dark100: '#383838',

      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
