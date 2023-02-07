import React, { HTMLInputTypeAttribute } from 'react';

export type InputProps = {
  name: string;
  type: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};
