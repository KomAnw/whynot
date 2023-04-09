import type { TMode } from 'src/api/mode/models';

export type TSizes = {
  width: number;
  height: number;
};

export type GameWindowProps = {
  background: string;
};

export type TSprite = {
  name: TMode;
  sprite: string;
  background: string;
  gameOverImage: {
    win: string;
    lose: string;
  };
};
