import GameOver from 'src/components/GameOver';
import Portal from 'components/Portal';
import { useGetUserQuery } from 'src/api/auth/auth';
import { useLazyAddQuery } from 'src/api/leaderboard/leaderboard';
import { LEADERBOARD_TEAM_NAME } from 'src/api/leaderboard/leaderboard';
import { GameResultProps } from './types';

const GameResult = ({ score, isWon, setIsPopupOpen, startGameAgain }: GameResultProps) => {
  const onClick = () => {
    addLeaderHandler().then();
    setIsPopupOpen(false);
    startGameAgain();
  };
  const [addLeaderQuery] = useLazyAddQuery();
  const { data: user } = useGetUserQuery();
  const addLeaderHandler = async (): Promise<void> => {
    try {
      await addLeaderQuery({
        data: {
          user_id: user!.id,
          first_name: user!.first_name,
          score,
        },
        ratingFieldName: 'score',
        teamName: LEADERBOARD_TEAM_NAME,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Portal>
      <GameOver gameScore={score} onClick={onClick} isWon={isWon} />
    </Portal>
  );
};

export default GameResult;
