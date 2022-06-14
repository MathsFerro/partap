/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        header: {
          100: '#C84E89'
        },
        buttonDefault: {
          100: '#6C63FF'
        }
      }
    },
  },
  plugins: [],
}
