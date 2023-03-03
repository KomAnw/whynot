export const firstLetterUppercase = (v: string, message = 'First letter should be capital') =>
  /^[А-ЯЁA-Z]{1}/.test(v) || message;

export const lettersAndDash = (v: string, message = 'Only letters and "-","_" are allowed') =>
  /([а-яёa-z]|(\w|-|_)[А-ЯЁA-Zа-яёa-z]{1}[а-яёa-z])*$/.test(v) || message;

export const maxAndMinLength = ({ length }: string, min: number, max: number, message = `${min}-${max} characters`) =>
  (length >= min && length <= max) || message;

export const noSpaces = (v: string, message = 'Spaces are not allowed') => /^\S*$/.test(v) || message;

export const validEmail = (v: string, message = 'Invalid Email') =>
  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || message;

export const validPhoneNumber = (v: string, message = 'Invalid phone number') => /^\+?\d{10,15}$/.test(v) || message;

export const hasCapitalLetters = (v: string, message = 'No capital letters') => /[А-ЯЁA-Z]{1}/.test(v) || message;

export const hasNumber = (v: string, message = 'No numbers') => /\d{1}/.test(v) || message;

export const hasSpecialCharacter = (v: string, message = 'No special characters') => /[@$!%*#?&]/.test(v) || message;
