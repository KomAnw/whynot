import { lettersAndDash, maxAndMinLength, noSpaces } from 'src/utils/validation';

export const loginFields = [
  {
    type: 'text',
    placeholder: 'JohnDoeForever',
    label: 'Login',
    name: 'login',
    validationRules: {
      required: 'Required field',
      validate: {
        allowedCharacters: (v: string) => lettersAndDash(v),
        length: (v: string) => maxAndMinLength(v, 3, 20),
        spaces: (v: string) => noSpaces(v),
      },
    },
  },
  {
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    name: 'password',
    validationRules: {
      required: 'Required field',
      validate: {
        maxAndMinLength: (v: string) => maxAndMinLength(v, 3, 40),
      },
    },
  },
];
