import type { ReactNode } from 'react';

export type ThemeWrapperProps = {
  children: ReactNode;
};

export type Theme = {
  name: string;
  colors: {
    core: {
      borderMenu: string;
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      text: {
        primary: string;
        secondary: string;
        error: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
        sextuple: string;
      };
      link: {
        link: string;
        linkHover: string;
      };
      spinner: string;
      divider: string;
    };
    control: {
      input: {
        color: string;
        background: string;
        backgroundSecondary: string;
        label: string;
        placeHolder: string;
        placeHolderSecondary: string;
      };
      toggle: {
        control: string;
        backgroundPrimary: string;
        backgroundSecondary: string;
      };
      button: {
        primary: {
          color: string;
          background: string;
          hoverBackground: string;
        };
        secondary: {
          color: string;
          background: string;
          hoverBackground: string;
        };
      };
    };
  };
  fonts: {
    main: string;
  };
};
