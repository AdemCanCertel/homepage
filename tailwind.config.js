module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'acik-gri': '#eeedec',
        'koyu-gri': '#373737',
        'koyu-mavi': '#28456c'
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
