import { ReactNode } from 'react';

export type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  variant: 'primary' | 'secondary';
  theme?: any;
  children: ReactNode | string;
  onSubmit: () => void;
  onClick: () => void;
};

export type ButtonComponent = ButtonProps & HTMLButtonElement;
