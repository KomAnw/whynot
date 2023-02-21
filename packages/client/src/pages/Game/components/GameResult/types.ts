export type GameResultProps = {
  score: number;
  isWon: boolean;
  totalScore: number;
  setIsOpenPopup: (value: boolean) => void;
  startGameAgain: () => void;
};
