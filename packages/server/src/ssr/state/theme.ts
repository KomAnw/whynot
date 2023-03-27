export const defaultTheme = {
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
        label: '#6C5BC3',
        placeHolder: '#6B687D',
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
} as const;