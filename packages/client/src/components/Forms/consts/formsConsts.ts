import {
  firstLetterUppercase,
  hasNumber,
  lettersAndDash,
  maxAndMinLength,
  noSpaces,
  validEmail,
  validPhoneNumber,
} from 'src/utils/validation';

export const formsConsts = {
  firstName: {
    type: 'text',
    placeholder: 'John',
    label: 'First Name',
    name: 'first_name' as const,
    value: '',
    validationRules: {
      required: 'Required field',
      validate: {
        firstLetter: (v: string) => firstLetterUppercase(v),
        allowedCharacters: (v: string) => lettersAndDash(v),
        spaces: (v: string) => noSpaces(v),
      },
    },
  },
  secondName: {
    type: 'text',
    placeholder: 'Doe',
    label: 'Second Name',
    name: 'second_name' as const,
    value: '',
    validationRules: {
      required: 'Required field',
      validate: {
        firstLetter: (v: string) => firstLetterUppercase(v),
        allowedCharacters: (v: string) => lettersAndDash(v),
        spaces: (v: string) => noSpaces(v),
      },
    },
  },
  displayName: {
    type: 'text',
    placeholder: '',
    label: 'Display Name',
    name: 'display_name' as const,
    value: '',
    validationRules: {
      required: 'Required field',
      validate: {
        firstLetter: (v: string) => firstLetterUppercase(v),
        allowedCharacters: (v: string) => lettersAndDash(v),
        spaces: (v: string) => noSpaces(v),
      },
    },
  },
  login: {
    type: 'text',
    placeholder: 'JohnDoeForever',
    label: 'Login',
    name: 'login' as const,
    value: '',
    validationRules: {
      required: 'Required field',
      validate: {
        allowedCharacters: (v: string) => lettersAndDash(v),
        length: (v: string) => maxAndMinLength(v, 3, 20),
        spaces: (v: string) => noSpaces(v),
      },
    },
  },
  email: {
    type: 'email',
    placeholder: 'example@gmail.com',
    label: 'Email',
    name: 'email' as const,
    value: '',
    validationRules: {
      required: 'Required field',
      validate: {
        email: (v: string) => validEmail(v),
      },
    },
  },
  phone: {
    type: 'tel',
    placeholder: '88005553535',
    label: 'Phone',
    name: 'phone' as const,
    value: '',
    validationRules: {
      required: 'Required field',
      validate: {
        phone: (v: string) => validPhoneNumber(v),
      },
    },
  },
  password: {
    type: 'password',
    placeholder: '*****',
    label: 'Password',
    name: 'password' as const,
    value: '',
    validationRules: {
      required: 'Required field',
      validate: {
        spaces: (v: string) => noSpaces(v),
        hasNumber: (v: string) => hasNumber(v),
        maxAndMinLength: (v: string) => maxAndMinLength(v, 3, 40),
      },
    },
  },
  confirmPassword: {
    type: 'password',
    placeholder: '*****',
    label: 'confirm Password',
    name: 'confirmPassword' as const,
    validationRules: {
      required: 'Required field',
      validate: {
        spaces: (v: string) => noSpaces(v),
        hasNumber: (v: string) => hasNumber(v),
        maxAndMinLength: (v: string) => maxAndMinLength(v, 3, 40),
      },
    },
  },
  oldPassword: {
    type: 'password',
    placeholder: '*****',
    label: 'old Password',
    name: 'oldPassword' as const,
    value: '',
    validationRules: {
      required: 'Required field',
      validate: {
        spaces: (v: string) => noSpaces(v),
        hasNumber: (v: string) => hasNumber(v),
        maxAndMinLength: (v: string) => maxAndMinLength(v, 3, 40),
      },
    },
  },
};
