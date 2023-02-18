import { Dispatch } from 'react';

export type TypeDataProfile = Record<string, string>;

export type TypeProfileProps = {
  data: TypeDataProfile;
  setIsOpenPopup: Dispatch<boolean>;
};

export type TypeAvatarProps = {
  setIsOpenPopup: Dispatch<boolean>;
};
