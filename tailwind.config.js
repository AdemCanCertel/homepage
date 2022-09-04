module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background_color': '#18181b',
      },
      width: {
        '163px': '163px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
