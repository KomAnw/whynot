import { Dispatch } from 'react';

export type TypeDataProfile = Record<string, string>;

export type TypeProfileProps = {
  data: TypeDataProfile;
};

export type TypeAvatarProps = {
  setIsOpenPopup: Dispatch<boolean>;
};
