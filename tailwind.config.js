module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background_color': '#18181b',
        'patreon': '#ff6871',
        'superpeer': '#fff7e4'
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
