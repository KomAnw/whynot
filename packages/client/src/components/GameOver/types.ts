export type GameOverProps = {
  isWon: boolean;
  gameScore: number;
  totalScore: number;
  level: number;
};

export type ImageProps = Pick<GameOverProps, 'isWon'>;
