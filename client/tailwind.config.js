module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './build/index.html'],
  // darkMode: media, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
