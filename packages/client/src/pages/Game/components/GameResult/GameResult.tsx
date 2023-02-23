import GameOver from 'src/components/GameOver';
import Portal from 'components/Portal';
import { GameResultProps } from './types';

const GameResult = ({ score, isWon, setIsPopupOpen, startGameAgain }: GameResultProps) => {
  const onClick = () => {
    setIsPopupOpen(false);
    startGameAgain();
  };

  return (
    <Portal>
      <GameOver gameScore={score} onClick={onClick} isWon={isWon} />
    </Portal>
  );
};

export default GameResult;
