export type TypeFormsConst = {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  value: string;
  validationRules: TypeValidationRules;
};

export type TypeValidationRules = {
  required?: string;
  validate?: TypeValidate;
};

export type TypeValidate = Record<string, (v: string) => boolean | string>;
