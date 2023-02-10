export type TSignInData = {
  login: string;
  password: string;
};

export type TUser = {
  id: string | number;
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
