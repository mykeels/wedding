module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        "128": "30rem",
        "196": "36rem",
      }),
      screens: {
        '3xl': { min: '1700px' }
      }
    },
  },
  variants: {
    extend: {},
  },
  fontFamily: {
    sans: ["Vibes", "Alex", "Scriptina", "Helvetica", "Arial"]
  },
  plugins: [],
};
