import {
  hasCapitalLetters,
  hasNumber,
  hasSpecialCharacter,
  maxAndMinLength,
  noSpaces,
} from 'src/utils/validation';

export const profilePasswordFields = [
  {
    type: 'password',
    placeholder: '*****',
    label: 'Password',
    name: 'password',
    validationRules: {
      required: 'Required field',
      validate: {
        spaces: (v: string) => noSpaces(v),
        hasCapitalLetters: (v: string) => hasCapitalLetters(v),
        hasNumber: (v: string) => hasNumber(v),
        hasSpecialCharacter: (v: string) => hasSpecialCharacter(v),
        maxAndMinLength: (v: string) => maxAndMinLength(v, 8, 40),
      },
    },
  },
  {
    type: 'password',
    placeholder: '*****',
    label: 'Password',
    name: 'password',
    validationRules: {
      required: 'Required field',
      validate: {
        spaces: (v: string) => noSpaces(v),
        hasCapitalLetters: (v: string) => hasCapitalLetters(v),
        hasNumber: (v: string) => hasNumber(v),
        hasSpecialCharacter: (v: string) => hasSpecialCharacter(v),
        maxAndMinLength: (v: string) => maxAndMinLength(v, 8, 40),
      },
    },
  },
];
