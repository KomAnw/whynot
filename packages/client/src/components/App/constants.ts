export const paths = {
  welcome: '/',
  login: '/login',
  registration: '/registration',
  errorPage: '/errorPage',
  notFound: '/notFound',
  logout: '/logout',
  leaderboard: '/leaderboard',
  tutorial: '/tutorial',
  game: {
    index: '/game',
    lose: 'lose',
    win: 'win',
  },
  forum: {
    index: '/forum/posts',
    id: '/forum/posts/:id',
  },
  menu: '/menu',
  settings: '/settings',
  profile: {
    index: '/profile',
    updateData: 'update/data',
    updatePassword: 'update/password',
  },
  oauth: '/oauth',
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
        borderMenu: 'transparent',
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
          quinary: '#000000',
          sextuple: '#0E752B',
        },
        link: {
          link: '#6457B8',
          linkHover: '#6457b8b3',
        },
        spinner: '#F2CE0D',
        divider: '#C8C8C8',
      },
      control: {
        input: {
          color: '#000000',
          background: '#ABCDCE',
          backgroundSecondary: '#ABCDCE',
          label: '#6C5BC3',
          placeHolder: '#6B687D',
          placeHolderSecondary: '#6B687D',
        },
        toggle: {
          control: '#FFFFFF',
          backgroundPrimary: '#6BD35A',
          backgroundSecondary: '#F2CE0D',
        },
        button: {
          primary: {
            color: '#FFFFFF',
            background: '#6C5BC3',
            hoverBackground: 'rgba(108, 91, 195, 0.8)',
          },
          secondary: {
            color: '#FFFFFF',
            background: '#6BD35A',
            hoverBackground: 'rgba(107, 211, 90, 0.5)',
          },
        },
      },
    },
    fonts: {
      main: 'Handjet',
    },
  },
  other: {
    name: 'other',
    colors: {
      core: {
        borderMenu: '#68B4D1',
        background: {
          primary: '#6C5BC3',
          secondary: '#C1CDF7',
          tertiary: '#F2CE0D',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#FFFFFF',
          error: '#FFD600',
          tertiary: '#5BCDC9',
          quaternary: '#6BD35A',
          quinary: '#FFFFFF',
          sextuple: '#FFD600',
        },
        link: {
          link: '#FFFFFF',
          linkHover: 'rgba(255, 255, 255, 0.8)',
        },
        spinner: '#F2CE0D',
        divider: '#C8C8C8',
      },
      control: {
        input: {
          color: '#6C5BC3',
          background: '#FFFFFF',
          backgroundSecondary: '#C1CDF7',
          label: '#FFFFFF',
          placeHolder: '#FFFFFF',
          placeHolderSecondary: '#6C5BC3',
        },
        toggle: {
          control: '#FFFFFF',
          backgroundPrimary: '#6BD35A',
          backgroundSecondary: '#F2CE0D',
        },
        button: {
          primary: {
            color: '#FFFFFF',
            background: '#68B4D1',
            hoverBackground: 'rgba(108, 91, 195, 0.8)',
          },
          secondary: {
            color: '#FFFFFF',
            background: '#F2CE0D',
            hoverBackground: 'rgba(107, 211, 90, 0.8)',
          },
        },
      },
    },
    fonts: {
      main: 'Handjet',
    },
  },
} as const;

export const sprites = [
  {
    name: 'Doodle',
    sprite: '/images/game/doodle/sprite.png',
    background: '/images/game/doodle/background.png',
    gameOverImage: {
      win: '/images/game/doodle/doodle-win.png',
      lose: '/images/game/doodle/doodle-lose.png',
    },
  },
  {
    name: 'Mario',
    sprite: '/images/game/mario/sprite.png',
    background: '/images/game/mario/background.png',
    gameOverImage: {
      win: '/images/game/mario/mario-win.png',
      lose: '/images/game/mario/mario-lose.png',
    },
  },
  {
    name: 'Homer',
    sprite: '/images/game/homer/sprite.png',
    background: '/images/game/homer/background.png',
    gameOverImage: {
      win: '/images/game/homer/homer-win.png',
      lose: '/images/game/homer/homer-lose.png',
    },
  },
] as const;
