import { TypeFormsConst } from 'components/Forms/consts/types';

export const isPasswordField = (name: string) => /password/i.test(name);

export const saveToLocalStorage = (name: string, value: string) =>
  value ? localStorage.setItem(name, value) : localStorage.removeItem(name);

export const getValuesFromLocalStorage = (fields: TypeFormsConst[] = []) =>
  fields.reduce((acc: Record<string, string>, { name }) => {
    const value = localStorage.getItem(name);

    if (value) {
      acc[name] = value;
    }

    return acc;
  }, {});

export const exampleFn = name => 0 * name;
