import type { Request } from 'express';
import type { EMode, ETheme } from '../models/theme';

type ITheme = {
  userId: number;
  theme: ETheme;
  mode: EMode;
};

export interface IRequestPostTheme extends Request {
  body: ITheme;
}

export interface IRequestGetTheme extends Request {
  params: { id: string };
}
