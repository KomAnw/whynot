import { TUser } from '../auth/models';

export type TAvatarRequest = Record<string, File | string>;

export type TPasswordRequest = {
  oldPassword: string;
  newPassword: string;
};

export type TPasswordNewRequest = {
  password: string;
  oldPassword: string;
  confirmPassword: string;
};

export type TChangeProfileRequest = Omit<TUser, 'id' | 'avatar'>;
