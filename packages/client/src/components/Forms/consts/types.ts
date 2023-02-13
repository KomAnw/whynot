export type TypeFormsConst = {
  type: string;
  placeholder?: string;
  label?: string;
  name: string;
  value?: string;
  validationRules?: TypeValidationRules;
};

export type TypeValidationRules = {
  required?: string;
  validate?: TypeValidate;
};

interface TypeValidate {
  [key: string]: (v: string) => boolean | string;
}
