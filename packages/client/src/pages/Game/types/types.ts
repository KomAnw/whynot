export type TSizes = {
  width: number;
  height: number;
};

export type GameWindowProps = {
  background: string;
};

export type TSprite = {
  name: string;
  sprite: string;
  background: string;
  gameOverImage: {
    win: string;
    lose: string;
  };
};
