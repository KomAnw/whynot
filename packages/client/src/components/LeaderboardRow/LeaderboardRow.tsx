import styled from 'styled-components';
import { Typography } from 'src/design/Typography';
import { Label } from 'src/design/Label';
import { LeaderboardRowProps, RowProps } from 'components/LeaderboardRow/type';

export const LeaderboardRow = ({ rank, nickname, score, isMine }: LeaderboardRowProps) => {
  return (
    <Row isMine={isMine}>
      <Item>
        <Rank>{rank}</Rank>
        <Nickname>{nickname}</Nickname>
        <Score>{score}</Score>
      </Item>
    </Row>
  );
};

const Row = styled(Label).attrs({ as: 'div' })<RowProps>`
  display: block;
  background-color: ${({ theme, isMine }) =>
    isMine ? theme.colors.core.background.tertiary : theme.colors.core.background.secondary};
  color: ${({ theme }) => theme.colors.core.text.quaternary};
  border-radius: 10px;
  height: 48px;
  font-size: 30px;
  line-height: 34px;
  margin: 6px;
`;

const Item = styled(Typography).attrs({ as: 'div' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  will-change: transform;
  transition: all 0.3s ease-in;
`;

const Rank = styled.div`
  margin-left: 54px;
  :after {
    content: '.';
  }
`;

const Nickname = styled.div`
  flex: 1;
  margin-left: 24px;
`;

const Score = styled.div`
  align-items: flex-end;
  text-align: right;
  flex: 1;
  margin-right: 27px;
`;
