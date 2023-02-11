import {
  firstLetterUppercase,
  lettersAndDash,
  maxAndMinLength,
  noSpaces,
  validEmail,
  validPhoneNumber,
} from 'src/utils/validation';

export const profileDateFields = [
  {
    type: 'text',
    placeholder: '',
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
    placeholder: '',
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
    placeholder: '',
    label: 'Display Name',
    name: 'displayName',
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
    placeholder: '',
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
    placeholder: '',
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
    placeholder: '',
    label: 'Phone',
    name: 'phone',
    validationRules: {
      required: 'Required field',
      validate: {
        phone: (v: string) => validPhoneNumber(v),
      },
    },
  },
];