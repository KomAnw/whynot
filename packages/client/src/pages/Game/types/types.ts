import { Dispatch } from "react";

export type TSizes = {
  width: number;
  height: number;
};

export type TGameOverProps = {
  setIsOpenPopup: Dispatch<boolean>;
};
