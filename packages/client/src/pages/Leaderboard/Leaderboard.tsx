import styled from 'styled-components';
import { breakpoints, paths } from 'src/components/App/constants';
import { H1 } from 'src/design/H1';
import LeaderboardRow from 'components/LeaderboardRow';
import { Link } from 'components/Link';
import { useGetTeamLeaderboardMutation } from 'src/api/leaderboard/leaderboard';
import { useGetUserQuery } from 'src/api/auth/auth';
import { useDidMount } from 'src/hooks/react';
import { useState } from 'react';
import { Leader } from 'src/api/leaderboard/models';

const { mobileM } = breakpoints;
const { menu } = paths;

const Leaderboard = () => {
  const { data: user } = useGetUserQuery();
  const [GetTeamLeaderboard] = useGetTeamLeaderboardMutation();
  const [data, setData] = useState<Array<Leader>>([]);

  const GetTeamLeaderboardHandler = async () => {
    try {
      const leaders = await GetTeamLeaderboard({
        ratingFieldName: 'score',
        cursor: 0,
        limit: 10,
      }).unwrap();

      if (leaders) {
        setData(leaders);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useDidMount(() => {
    GetTeamLeaderboardHandler().then();
  });

  return (
    <Wrapper>
      <LeaderboardComponent>
        <LeaderboardH1>Leaderboard</LeaderboardH1>
        <Column>
          {data?.map((data, index: number) => (
            <LeaderboardRow
              key={index + 1}
              rank={index + 1}
              nickname={data.data.first_name}
              score={data.data.score}
              isMine={data.data.user_id === user!.id}
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeaderboardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 720px;
  padding: 12px 47px 12px 47px;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  @media (max-width: ${mobileM}) {
    width: 354px;
    height: 636px;
  }
`;

const LeaderboardH1 = styled(H1)`
  font-size: 48px;
  line-height: 54px;
`;

const Column = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;
