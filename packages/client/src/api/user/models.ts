import { TUser } from 'src/api/auth/models';

export type TUserData = Omit<TUser, 'password'> & UserDisplayName;

type UserDisplayName = {
  display_name: 'string';
};

export type TPasswordData = {
  oldPassword: string;
  newPassword: string;
};
