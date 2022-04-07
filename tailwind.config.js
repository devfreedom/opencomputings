module.exports = {
  content: [
      './index.html',
      './src/**/*.{html,js}'
    ],
  theme: {
    screens: {
      'phone': '640px',

      'tablet': '768px',

      'laptop': '1280px',
    },

    extend: {
      fontFamily: {
        'fira-code' : 'Fira Code, sans-serif',
        'fira-sans' : 'Fira Sans, sans-serif',
        'lato' : 'Lato, sans-serif',
        'open sans' : 'Open Sans, sans-serif',
        'source-sans-pro' : 'Source Sans Pro, sans-serif',
        'ubuntu' : 'Ubuntu, sans-serif'
      }
    },

  },
  plugins: [],
}
