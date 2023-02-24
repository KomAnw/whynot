export type TypeFormsConst = {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  value: string;
  validationRules: TypeValidationRules;
};

type TypeValidationRules = {
  required?: string;
  validate?: TypeValidate;
};

type TypeValidate = Record<string, (v: string) => boolean | string>;
