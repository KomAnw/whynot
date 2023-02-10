import {
  firstLetterUppercase,
  hasCapitalLetters,
  hasNumber,
  hasSpecialCharacter,
  lettersAndDash,
  maxAndMinLength,
  noSpaces,
  validEmail,
  validPhoneNumber,
} from 'src/utils/validation';

export const registrationFields = [
  {
    type: 'text',
    placeholder: 'John',
    label: 'First Name',
    name: 'firstName',
    validationRules: {
      required: 'Required field',
      validate: {
        firstLetter: (v: string) => firstLetterUppercase(v),
        allowedCharacters: (v: string) => lettersAndDash(v),
        spaces: (v: string) => noSpaces(v),
      },
    },
  },
  {
    type: 'text',
    placeholder: 'Doe',
    label: 'Second Name',
    name: 'secondName',
    validationRules: {
      required: 'Required field',
      validate: {
        firstLetter: (v: string) => firstLetterUppercase(v),
        allowedCharacters: (v: string) => lettersAndDash(v),
        spaces: (v: string) => noSpaces(v),
      },
    },
  },
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
    type: 'email',
    placeholder: 'Email',
    label: 'example@gmail.com',
    name: 'email',
    validationRules: {
      required: 'Required field',
      validate: {
        email: (v: string) => validEmail(v),
      },
    },
  },
  {
    type: 'tel',
    placeholder: '88005553535',
    label: 'Phone',
    name: 'phone',
    validationRules: {
      required: 'Required field',
      validate: {
        phone: (v: string) => validPhoneNumber(v),
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
        spaces: (v: string) => noSpaces(v),
        hasCapitalLetters: (v: string) => hasCapitalLetters(v),
        hasNumber: (v: string) => hasNumber(v),
        hasSpecialCharacter: (v: string) => hasSpecialCharacter(v),
        maxAndMinLength: (v: string) => maxAndMinLength(v, 8, 40),
      },
    },
  },
];
