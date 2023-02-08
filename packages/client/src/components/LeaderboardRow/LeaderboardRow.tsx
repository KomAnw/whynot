import styled from 'styled-components';
import { ListText } from 'src/design/ListText';

export const LeaderboardRow = () => {
  return (
    <Row>
      <ol>
        <Item>
          <>NickName</>
       </Item>
      </ol>
    </Row>
  );
};


const Row = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.core.background.secondary};
  border-radius: 10px;
  width: 100%;
  height: 48px;
`;

const Item = styled(ListText)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
