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
          primary: '#D9D9D9',
          secondary: '#5BCDC9',
          tertiary: '#F2CE0D',
        },
        text: {
          primary: '#6C5BC3',
          secondary: '#FFFFFF',
          error: '#FF0000',
          tertiary: '#6B687D',
          quaternary: '#000000',
        },
        link: {
          link: '#6457B8',
          linkHover: '#6457b8b3',
        },
      },
      control: {
        input: {
          background: '#ABCDCE',
          label: '#6C5BC3',
          placeHolder: '#6B687D',
        },
        toggle: {
          control: '#FFFFFF',
          backgroundPrimary: '#6BD35A',
          backgroundSecondary: '#F2CE0D',
        },
        button: {
          primary: '#6C5BC3',
          primaryHover: 'rgba(108, 91, 195, 0.8)',
          secondary: '#6BD35A',
          secondaryHover: 'rgba(107, 211, 90, 0.8)',
        },
      },
    },
    fonts: {
      first: '1',
    },
  },
  other: {
    name: 'other',
    colors: {
      core: {
        background: {
          primary: '#D9D9D9',
          secondary: '#5BCDC9',
          tertiary: '#F2CE0D',
        },
        text: {
          primary: '#6C5BC3',
          secondary: '#FFFFFF',
          error: '#FF0000',
          tertiary: '#6B687D',
          quaternary: '#000000',
        },
        link: {
          link: '#6457B8',
          linkHover: '#6457b8b3',
        },
      },
      control: {
        input: {
          background: '#ABCDCE',
          label: '#6C5BC3',
          placeHolder: '#6B687D',
        },
        toggle: {
          control: '#FFFFFF',
          backgroundPrimary: '#6BD35A',
          backgroundSecondary: '#F2CE0D',
        },
        button: {
          primary: '#6C5BC3',
          primaryHover: 'rgba(108, 91, 195, 0.8)',
          secondary: '#6BD35A',
          secondaryHover: 'rgba(107, 211, 90, 0.8)',
        },
      },
    },
    fonts: {
      first: '1',
    },
  },
} as const;
