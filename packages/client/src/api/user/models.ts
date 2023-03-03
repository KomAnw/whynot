import { TUser } from '../auth/models';

export type TPasswordRequest = {
  oldPassword: string;
  newPassword: string;
};

export type TChangeProfileRequest = Omit<TUser, 'id' | 'avatar'>;
