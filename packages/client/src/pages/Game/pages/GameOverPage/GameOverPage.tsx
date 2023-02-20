import styled from 'styled-components';
import GameOver from 'src/components/GameOver';

const GameOverPage = ({ score, level, win, totalScore, setIsOpenPopup, startGameAgain }: any) => {
  const onClick = () => {
    setIsOpenPopup(false);
    startGameAgain();
  };

  return (
    <ModalStyle>
      <GameOver gameScore={score} onClick={() => onClick()} level={level} totalScore={totalScore} isWon={win} />
    </ModalStyle>
  );
};

export default GameOverPage;

const ModalStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
`;
