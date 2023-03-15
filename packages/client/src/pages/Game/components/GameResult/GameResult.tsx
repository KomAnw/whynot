import GameOver from 'src/components/GameOver';
import Portal from 'components/Portal';
import { useGetUserQuery } from 'src/api/auth/auth';
import { useAddMutation } from 'src/api/leaderboard/leaderboard';
import { LEADERBOARD_TEAM_NAME } from 'components/App/constants';
import { useEffect } from 'react';
import { GameResultProps } from './types';

const GameResult = ({ score, isWon, setIsPopupOpen, startGameAgain }: GameResultProps) => {
  const onClick = () => {
    setIsPopupOpen(false);
    startGameAgain();
  };
  const [addLeaderQuery] = useAddMutation();
  const { data: user } = useGetUserQuery();

  useEffect(() => {
    addLeaderQuery({
      data: {
        user_id: user?.id,
        first_name: user?.first_name,
        score,
      },
      ratingFieldName: 'score',
      teamName: LEADERBOARD_TEAM_NAME,
    });
  }, [user]);

  return (
    <Portal>
      <GameOver gameScore={score} onClick={onClick} isWon={isWon} />
    </Portal>
  );
};

export default GameResult;
