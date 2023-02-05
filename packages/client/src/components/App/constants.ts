export const paths = {
  welcome: '/',
  login: 'login',
  registration: 'registration',
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
      text: 'white',
      background: 'black',
    },
    fonts: {
      first: '1',
      second: '2',
    },
  },
  // TODO название для примера (нужно поменять)
  other: {
    name: 'other',
    colors: {
      text: 'black',
      background: 'white',
    },
    fonts: {
      first: '1',
      second: '2',
    },
  },
} as const;
