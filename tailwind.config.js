module.exports = {
    content: ['./client/src/**/*.{js,jsx,ts,tsx}', './client/build/index.html'],
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
  