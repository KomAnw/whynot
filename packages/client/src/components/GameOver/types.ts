export type GameOverProps = {
  isWon: boolean;
  gameScore: number;
  totalScore: number;
  level: number;
  onClick: () => void;
};

export type ButtonProps = {
  onClick: () => void;
};

export type ImageProps = Pick<GameOverProps, 'isWon'>;
