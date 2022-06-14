/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        headerGradient: {
          left: '#C84E89',
          right: '#F15F79' 
        },
        buttonDefault: {
          100: '#6C63FF'
        }
      }
    },
  },
  plugins: [],
}
