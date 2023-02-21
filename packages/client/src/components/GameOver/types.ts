export type GameOverProps = {
  isWon?: boolean;
  gameScore?: number;
  totalScore?: number;
  onClick?: () => void;
};

export type ImageProps = Pick<GameOverProps, 'isWon'>;
