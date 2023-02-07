import { ReactNode } from 'react';

export type ThemeWrapperProps = {
  children: ReactNode;
};

export type Theme = {
  name: string;
  colors: {
    core: {
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
      };
      link: {
        link: string;
        linkHover: string;
      };
    };
    control: {
      input: {
        background: string;
        label: string;
        placeHolder: string;
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
    first: string;
    second: string;
  };
};
