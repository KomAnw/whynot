import GameOver from 'src/components/GameOver';
import Portal from 'components/Portal';
import { useGetUserQuery } from 'src/api/auth/auth';
import { useAddMutation } from 'src/api/leaderboard/leaderboard';
import { LEADERBOARD_TEAM_NAME } from 'src/api/leaderboard/leaderboard';
import { useDidMount } from 'src/hooks/react';
import { logger } from 'src/utils/logger';
import type { GameResultProps } from './types';

const GameResult = ({ score, isWon, setIsPopupOpen, startGameAgain }: GameResultProps) => {
  const [addLeader] = useAddMutation();
  const { data: user } = useGetUserQuery();
  const addLeaderHandler = async () => {
    try {
      await addLeader({
        data: {
          user_id: user!.id,
          first_name: user!.first_name,
          score,
        },
        ratingFieldName: 'score',
        teamName: LEADERBOARD_TEAM_NAME,
      });
    } catch (e) {
      logger(e, 'error');
    }
  };

  const onClick = () => {
    setIsPopupOpen(false);
    startGameAgain();
  };

  useDidMount(() => {
    addLeaderHandler();
  });

  return (
    <Portal>
      <GameOver gameScore={score} onClick={onClick} isWon={isWon} />
    </Portal>
  );
};

export default GameResult;
