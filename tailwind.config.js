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
        // Note that Tailwind does not automatically escape font names for you. If you’re using a font that contains an invalid identifier, wrap it in quotes or escape the invalid characters.
        'fira-code' : ['"Fira Code"', 'monospace'],
        'fira-sans' : ['"Fira Sans"', 'sans-serif'],
        'lato' : ['Lato', 'sans-serif'],
        'open-sans' : ['"Open Sans"', 'sans-serif'],
        'noto-sans' : ['"Noto Sans"', 'sans-serif'],
        'ubuntu' : ['Ubuntu', 'sans-serif']
      },
      dropShadow: {
        'xl': '0 10px 10px rgba(0, 0, 0, 0.5)',
        '2xl': '0 20x 30px rgba(0, 0, 0, 0.5)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.5)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },

  },
  plugins: [],
}
