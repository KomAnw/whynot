import styled from 'styled-components';
import { breakpoints, paths } from 'src/components/App/constants';
import { H1 } from 'src/design/H1';
import LeaderboardRow from 'components/LeaderboardRow';
import { Link } from 'components/Link';
import { useGetTeamLeaderboardMutation } from 'src/api/leaderboard/leaderboard';
import { useGetUserQuery } from 'src/api/auth/auth';
import { useDidMount } from 'src/hooks/react';
import { useState } from 'react';
import type { Leader } from 'src/api/leaderboard/models';

const { mobileM } = breakpoints;
const { menu } = paths;

const Leaderboard = () => {
  const { data: user } = useGetUserQuery();
  const [GetTeamLeaderboard] = useGetTeamLeaderboardMutation();
  const [leaders, setLeaders] = useState<Array<Leader>>([]);

  const GetTeamLeaderboardHandler = async () => {
    try {
      const data = await GetTeamLeaderboard({
        ratingFieldName: 'score',
        cursor: 0,
        limit: 10,
      }).unwrap();

      setLeaders(data);
    } catch (err) {
      console.error(err);
    }
  };

  useDidMount(() => {
    GetTeamLeaderboardHandler();
  });

  return (
    <Wrapper>
      <LeaderboardComponent>
        <LeaderboardH1>Leaderboard</LeaderboardH1>
        <Column>
          {leaders?.map(({ data: leader }, index: number) => (
            <LeaderboardRow
              key={leader.user_id}
              rank={index + 1}
              nickname={leader.first_name}
              score={leader.score}
              isMine={leader.user_id === user!.id}
            />
          ))}
        </Column>
        <Link variant="size30" to={menu}>
          Back to menu
        </Link>
      </LeaderboardComponent>
    </Wrapper>
  );
};

export default Leaderboard;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeaderboardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 636px;
  padding: 0 20px 10px;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};

  @media (max-width: ${mobileM}) {
    width: 354px;
  }
`;

export const LeaderboardH1 = styled(H1)`
  height: 45px;
  margin: 14px 0 0 0;
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Column = styled.ul`
  width: 380px;
  height: 100%;
  padding: 0;
  margin: 0;

  @media (max-width: ${mobileM}) {
    width: 300px;
  }
`;
