export const registrationFields = [
  {
    type: 'text',
    placeholder: 'First Name',
    name: 'firstName',
    validationRules: {
      required: 'Required field',
      maxLength: 20,
      validate: {
        firstLetter: v => /^[A-Z]/.test(v) || 'First letter should be uppercase',
        onlyLetters: v => /^[aA-zZ\s?-]+$/.test(v) || 'Only letters and "-" allowed',
      },
    },
  },
  { type: 'text', placeholder: 'Last Name', name: 'lastName' },
  { type: 'email', placeholder: 'Email', name: 'email' },
  { type: 'password', placeholder: 'Password', name: 'password' },
  { type: 'password', placeholder: 'Confirm Password', name: 'confirmPassword' },
];
