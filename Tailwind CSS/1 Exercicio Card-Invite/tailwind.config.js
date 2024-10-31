/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'yuri': "url('./src/yuri.jpg')"
      }
    },
  },
  plugins: [],
}

