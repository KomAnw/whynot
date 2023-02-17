import { TUser } from 'src/api/auth/models';

export type TUserData = Omit<TUser, 'password'> & { display_name: 'string' };

export type TAvatarData = {
  [key: string]: File | string;
};

export type TPasswordData = {
  oldPassword: string;
  newPassword: string;
};
