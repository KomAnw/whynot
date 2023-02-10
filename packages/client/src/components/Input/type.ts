import { HTMLInputTypeAttribute } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export type InputProps = {
  name: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<FieldValues>;
  validationRules: Record<string, unknown>;
  label: string;
  placeholder: string;
  errorMessage?: string;
};
