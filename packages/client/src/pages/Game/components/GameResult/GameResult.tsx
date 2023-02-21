import GameOver from 'src/components/GameOver';
import Portal from 'components/Portal';
import { GameResultProps } from './types';

const GameResult = ({ score, isWon, totalScore, setIsPopupOpen, startGameAgain }: GameResultProps) => {
  const onClick = () => {
    setIsPopupOpen(false);
    startGameAgain();
  };

  return (
    <Portal>
      <GameOver gameScore={score} onClick={onClick} totalScore={totalScore} isWon={isWon} />
    </Portal>
  );
};

export default GameResult;
