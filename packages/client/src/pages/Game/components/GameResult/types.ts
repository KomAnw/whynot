export type GameResultProps = {
  score: number;
  isWon: boolean;
  setIsPopupOpen: (value: boolean) => void;
  startGameAgain: () => void;
};
