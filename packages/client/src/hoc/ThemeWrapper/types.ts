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
      };
      text: {
        primary: string;
        secondary: string;
        error: string;
      };
      link: {
        link: string;
        linkHover: string;
      };
    };
    control: {
      input: {
        primary: string;
        secondary: string;
      };
      toggle: {
        primary: string;
        secondary: string;
      };
      button: {
        primary: string;
        secondary: string;
      };
    };
  };
  fonts: {
    first: string;
  };
};
