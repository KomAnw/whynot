import type { HTMLInputTypeAttribute } from 'react';
import type { UseFormRegister } from 'react-hook-form';

export type InputProps = {
  name: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<any>; // I don't know hot to type this shit, there are no solutions for this
  validationRules: Record<string, unknown>;
  label: string;
  placeholder: string;
  errorMessage?: string;
};
