export type GameResultProps = {
  score: number;
  isWon: boolean;
  totalScore: number;
  setIsPopupOpen: (value: boolean) => void;
  startGameAgain: () => void;
};
