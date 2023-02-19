import { HTMLInputTypeAttribute, ChangeEvent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export type InputProps = {
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<FieldValues>;
};

export type onChangeProps = ChangeEvent<HTMLInputElement>;
