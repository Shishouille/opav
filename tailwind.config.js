const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      };

      addComponents(buttons);
    }),
    plugin(({ addComponents, config }) => {
      const title = {
        '.title': {
          fontSize: '2em',
          color: '#ab2128',
          fontFamily: config('theme.fontFamily.title'),
        },
        '.subtitle': {
          fontSize: '1.5em',
          color: '#b38a4d',
        },
      };

      addComponents(title);
    }),
    plugin(({ addBase, config }) => {
      addBase({
        p: { fontFamily: config('theme.fontFamily.text') },
      });
    }),
  ],

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        'title': 'IMFrench',
        'text': 'Poppins',
      },
      backgroundColor: {
        'content': '#dfece9',
        'nav': '#f7f3ed',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
