import styled from 'styled-components';
import { Button } from 'src/components/Button';
import { Link } from 'src/components/Link';
import { Link as RouteLink } from 'react-router-dom';
import { listMenu } from './constants';

const GameMenu = () => {
  return (
    <Page>
      <Container>
        <Wrapper>
          {listMenu.map(item =>
            item.type === 'button' ? (
              <RouteLink key={item.name} to={item.path}>
                <Button variant="secondary">{item.name}</Button>
              </RouteLink>
            ) : (
              <ListItem key={item.name}>
                <Link to={item.path} variant="size40">
                  {item.name}
                </Link>
              </ListItem>
            )
          )}
        </Wrapper>
      </Container>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 416px;
  border-radius: 20px;
  padding-top: 30px;
  background: ${({ theme }) => theme.colors.core.background.primary};
`;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 6px 0 0 0;
`;

const ListItem = styled.li`
  margin: 6px 0 0 0;
  list-style-type: none;
`;

export default GameMenu;
