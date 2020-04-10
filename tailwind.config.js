const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(({ addComponents }) => {
      const bubble = {
        '.menu-bg': {
          backgroundImage: 'linear-gradient(to right bottom, #ff6a4d, #ef5d46, #df503f, #d04238, #c03531, #b22c2c, #a32326, #951a21, #85151c, #751017, #650b12, #56070c)',
          zIndex: '30',
          color: 'black',
          position: 'fixed',
          transition: '0.6s cubic-bezier(0.33, 1, 0.68, 1)',
          minWidth: '100vw',
          minHeight: '100vh',
          top: '0',
          left: '0',
          display: 'flex',
          justifyContent: 'space-around',
          flexFlow: 'column',
          alignItems: 'center',
        },
        '.bubble-right': {
          marginLeft: '6em',
        },
        '.bubble-left': {
          marginRight: '6em',
        },
        '.close-bubble': {
          color: 'white',
          textDecoration: 'underline',
          cursor: 'pointer',
        },
        '.bubble': {
          backgroundColor: 'rgba(255, 255, 255, .85)',
          transition: 'background 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
          fontWeight: '600',
          color: 'white',
          borderRadius: '50%',
          width: '7em',
          height: '7em',
          '&:hover': {
            backgroundColor: 'rgb(255, 255, 255)',
          },
        },
        '.text-bubble': {
          position: 'relative',
          textAlign: 'center',
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '7em',
          height: '7em',
        },
      };
      addComponents(bubble);
    }),
    plugin(({ addComponents, config }) => {
      const nav = {
        '.nav-menu': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid black',
          paddingBottom: '.4em',
          fontSize: '1.3em',
          paddingRight: '1em',
        },
        '.nav-logo': {
          marginLeft: '.3em',
        },
        '.nav-title': {
          color: 'red',
        },
      };

      addComponents(nav);
    }),
    plugin(({ addComponents, config }) => {
      const layout = {
        '.layout': {
          minHeight: '100vh',
        },
        '.layout-bg': {
          backgroundColor: 'white',
        },
      };
      addComponents(layout);
    }),
    plugin(({ addComponents, config }) => {
      const headline = {
        '.hd-line': {
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage: 'url(\'https://www.datocms-assets.com/25425/1586521556-architecture-art-buildings-city-548094-edited.png\')',
          backgroundPosition: 'left',
          backgroundSize: 'cover',
          color: 'black',
        },
        '.hd-finder': {
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage: 'url(\'https://www.datocms-assets.com/25425/1586525390-people-watching-play-on-stage-2372945-edited.png\')',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          color: 'black',
          marginTop: '5em',
        },
        '.hd-bubble': {
          backgroundColor: 'rgba(255, 255, 255, .85)',
          transition: 'background 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
          fontWeight: '600',
          color: 'white',
          borderRadius: '50%',
          width: '17em',
          height: '17em',
          margin: 'auto',
          '&:hover': {
            backgroundColor: 'rgb(255, 255, 255)',
          },
        },
        '.hd-text-bubble': {
          width: '17em',
          height: '17em',
          display: 'flex',
          flexDirection: 'column',
        },
        'hd-display': {
          display: 'flex',
          flexDirection: 'column',
        },
        '.hd-title': {
          marginTop: '1em',
          fontSize: '1.5em',
          textAlign: 'center',
          width: '100%',
        },
        '.hd-subtitle': {
          textAlign: 'center',
          fontWeight: 'normal',
        },
        '.hd-link': {
          textDecoration: 'underline',
          fontSize: '1.2em',
        },
      };
      addComponents(headline);
    }),
    plugin(({ addComponents, config }) => {
      const artistHome = {
        '.artist-bg': {
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage: 'url(\'https://www.datocms-assets.com/25425/1586524751-ballet-dancer-1820144-edited.png\')',
          backgroundPosition: 'left',
          backgroundSize: 'cover',
          color: 'black',
        },
        '.artist-display': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2em',
          padding: '.5em',
        },
        '.artist-category': {
          width: '40%',
          padding: '1em',
          borderRight: '1px solid black',
          textAlign: 'center',
          color: '#a32326',
        },
        '.artist-portrait': {
          marginLeft: '1.3em',
          textAlign: 'center',
        },
        '.artist-title': {
          margin: '.5em',
          textAlign: 'center',
        },
        '.artist-subtitle': {
          fontStyle: 'italic',
        },
        '.artist-sp': {
          fontSize: '1.5em',
        },
      };
      addComponents(artistHome);
    }),
    plugin(({ addComponents, config }) => {
      const spectacle = {
        '.spectacle-description': {
          width: '100%',
          textAlign: 'center',
        },
        '.spectacle-title': {
          backgroundImage: 'linear-gradient(to right bottom, #ff6a4d, #ef5d46, #df503f, #d04238, #c03531, #b22c2c, #a32326, #951a21, #85151c, #751017, #650b12, #56070c)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.5em',
        },
        '.spectacle-category': {
          width: '100%',
          textAlign: 'center',
          textTransform: 'uppercase',
          marginTop: '.3em',
          padding: '.3em',
        },
        '.spectacle-subtitle': {
          width: '40%',
          fontSize: '1.4em',
          fontFamily: config('theme.fontFamily.title'),
          color: '#ab2128',
        },
      };
      addComponents(spectacle);
    }),
    plugin(({ addComponents, config }) => {
      const footer = {
        '.footer-d': {
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1em',
        },
        '.footer-title': {
          fontFamily: config('theme.fontFamily.title'),
          fontSize: '1.2em',
        },
        '.footer-text': {
          color: 'black',
        },
      };
      addComponents(footer);
    }),

    plugin(({ addComponents, config }) => {
      const title = {
        '.title': {
          fontSize: '2em',
          color: '#ab2128',
          fontFamily: config('theme.fontFamily.title'),
        },
      };
      addComponents(title);
    }),
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
    plugin(({ addBase, config }) => {
      addBase({
        p: { fontFamily: config('theme.fontFamily.text') },
        a: { fontFamily: config('theme.fontFamily.text') },
        h1: { fontFamily: config('theme.fontFamily.text') },
      });
    }),
  ],

  theme: {
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
        title: 'IMFrench',
        text: 'Poppins',
      },
      backgroundColor: {
        content: '#dfece9',
        nav: '#f7f3ed',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
