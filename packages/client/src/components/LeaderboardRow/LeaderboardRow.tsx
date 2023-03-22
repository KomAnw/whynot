import styled from 'styled-components';
import { LeaderboardRowProps, RowProps } from 'components/LeaderboardRow/type';
import { ListText } from 'src/design/ListText';

export const LeaderboardRow = ({ rank, nickname, score, isMine }: LeaderboardRowProps) => {
  return (
    <Row isMine={isMine}>
      <UserInfo>
        {rank}. {nickname}
      </UserInfo>
      <div>{score}</div>
    </Row>
  );
};

const Row = styled(ListText)<RowProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 10px;
  margin: 6px;
  border-radius: 10px;
  background-color: ${({ theme, isMine }) =>
    isMine ? theme.colors.core.background.tertiary : theme.colors.core.background.secondary};
  color: ${({ theme }) => theme.colors.core.text.quaternary};
  }
`;

const UserInfo = styled.div`
  display: flex;
`;
