import styled from 'styled-components';
import { breakpoints } from 'components/App/constants';
import { Label } from 'src/design/Label';
import LeaderboardRow from "components/LeaderboardRow";

const { mobileM } = breakpoints;

const Leaderboard = () => {
  return (
    <Wrapper>
      <LeaderboardComponent>
        <LeaderboardLabel>Leaderboard</LeaderboardLabel>
        <LeaderboardRow />
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
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  @media (max-width: ${mobileM}) {
    width: 354px;
    height: 636px;
  }
`;

const LeaderboardLabel = styled(Label)`
  display: flex;
  font-size: 48px;
`;
