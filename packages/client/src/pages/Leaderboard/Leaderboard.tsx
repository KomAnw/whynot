import styled from 'styled-components';
import { breakpoints } from 'components/App/constants';
import { Label } from 'src/design/Label';
import LeaderboardRow from 'components/LeaderboardRow';
import { leaderboardConsts } from 'components/LeaderboardRow/consts/leaderboardConsts';

const { mobileM } = breakpoints;

const Leaderboard = () => {
  return (
    <Wrapper>
      <LeaderboardComponent>
        <LeaderboardLabel>Leaderboard</LeaderboardLabel>
        <Column>
          {leaderboardConsts.map(({ rank, nickname, score, isMine }) => (
            <div key={rank}>
              <LeaderboardRow rank={rank} nickname={nickname} score={score} isMine={isMine} />
            </div>
          ))}
        </Column>
        <Link>
          <a>Back to menu</a>
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
  font-family: ${({ theme }) => theme.fonts.main};
`;

const LeaderboardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 720px;
  padding: 0 47px 0 47px;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  @media (max-width: ${mobileM}) {
    width: 354px;
    height: 636px;
  }
`;

const LeaderboardLabel = styled(Label)`
  font-size: 48px;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
`;

const Link = styled(Label).attrs({ as: 'div' })`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;
`;
