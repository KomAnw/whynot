import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariants = 'primary' | 'secondary';

export type ButtonProps = {
  variant: ButtonVariants;
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onSubmit?: () => void;
  onClick?: () => void;
};

export type ButtonComponent = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
