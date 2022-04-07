module.exports = {
  content: [
      './index.html',
      './src/**/*.{html,js}'
    ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
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
