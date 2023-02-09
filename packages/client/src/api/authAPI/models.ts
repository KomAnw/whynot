export type ID = string | number;

export type TSignInData = {
  login: string;
  password: string;
};

export type TUser = {
  id: ID;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
};

export type TSignUpData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};
