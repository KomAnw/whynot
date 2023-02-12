export type typeDataProfile = {
  id?: number;
  firstName: string;
  secondName: string;
  displayName?: string;
  login: string;
  email: string;
  phone: string;
  avatar?: string;
};


export type typeProfileProps = {
  data: typeDataProfile
};
