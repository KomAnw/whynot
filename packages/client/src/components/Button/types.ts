import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant: 'primary' | 'secondary';
  children?: ReactNode;
  onSubmit: () => void;
  onClick: () => void;
};

export type ButtonComponent = ButtonProps & HTMLButtonElement;
