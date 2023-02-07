import { ReactNode } from 'react';

export type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  variant: 'primary' | 'secondary';
  children?: ReactNode;
  onSubmit: () => void;
  onClick: () => void;
};

export type ButtonComponent = ButtonProps & HTMLButtonElement;
