import styled from 'styled-components';
import { breakpoints } from 'components/App/constants';
import { H1 } from 'src/design/H1';
import LeaderboardRow from 'components/LeaderboardRow';
import { leaderboardConsts } from 'components/LeaderboardRow/consts/leaderboardConsts';
import { paths } from 'components/App/constants';
import {Link} from "components/Link";

const { mobileM } = breakpoints;
const { menu } = paths;

const Leaderboard = () => {
  return (
    <Wrapper>
      <LeaderboardComponent>
        <LeaderboardH1>Leaderboard</LeaderboardH1>
        <Column>
          {leaderboardConsts.map(({ rank, nickname, score, isMine }) => (
            <LeaderboardRow key={rank} rank={rank} nickname={nickname} score={score} isMine={isMine} />
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
