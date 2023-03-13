import { FormEvent } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { TypeFormsConst } from 'components/Forms/consts/types';

const isPasswordField = (name: string) => /password/i.test(name);

export const saveToLocalStorage = (e: FormEvent<HTMLFormElement>) => {
  const { value, name } = e.target as HTMLInputElement;

  if (!isPasswordField(name)) {
    localStorage.setItem(name, value);
  }
};

export const setValueFromLocalStorageToField = (fields: TypeFormsConst[], setValue: UseFormSetValue<any>) => {
  fields.forEach(({ name: key }) => {
    const value = localStorage.getItem(key);

    value && setValue(key, value);
  });
};
