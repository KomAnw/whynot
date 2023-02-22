export type GameOverProps = {
  isWon?: boolean;
  gameScore?: number;
  onClick?: () => void;
};

export type ImageProps = Pick<GameOverProps, 'isWon'>;
