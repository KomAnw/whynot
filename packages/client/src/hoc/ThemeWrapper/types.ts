import { ReactNode } from 'react';

export type ThemeWrapperProps = {
  children: ReactNode;
};

export type Theme = {
  name: string;
  colors: {
    text: string;
    background: string;
  };
  fonts: {
    first: string;
    second: string;
  };
};
