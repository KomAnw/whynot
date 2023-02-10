import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onSubmit?: () => void;
  onClick?: () => void;
};

export type ButtonComponent = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
