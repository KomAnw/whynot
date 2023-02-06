export const paths = {
  welcome: '/',
  login: 'login',
  registration: 'registration',
  page500: '/500',
} as const;

export const breakpoints = {
  mobileS: '319px',
  mobileM: '767px',
  tablet: '1023px',
  laptop: '1439px',
  laptopL: '1799px',
  desktop: '2599px',
} as const;

export const themes = {
  default: {
    name: 'default',
    colors: {
      core: {
        background: {
          primary: 'white',
          secondary: 'blue',
        },
        text: {
          primary: 'black',
          secondary: 'green',
          error: 'red',
        },
        link: {
          link: 'blue',
          linkHover: '#03a9f4',
        },
      },
      control: {
        input: {
          primary: 'black',
          secondary: 'green',
        },
        toggle: {
          primary: 'black',
          secondary: 'green',
        },
        button: {
          primary: 'black',
          secondary: 'green',
        },
      },
    },
    fonts: {
      first: '1',
    },
  },
  // TODO название для примера (нужно поменять)
  other: {
    name: 'other',
    colors: {
      core: {
        background: {
          primary: 'black',
          secondary: 'grey',
        },
        text: {
          primary: 'white',
          secondary: 'purple',
          error: 'red',
        },
        link: {
          link: 'blue',
          linkHover: '#03a9f4',
        },
      },
      control: {
        input: {
          primary: 'white',
          secondary: 'yellow',
        },
        toggle: {
          primary: 'white',
          secondary: 'yellow',
        },
        button: {
          primary: 'white',
          secondary: 'yellow',
        },
      },
    },
    fonts: {
      first: '1',
    },
  },
} as const;
