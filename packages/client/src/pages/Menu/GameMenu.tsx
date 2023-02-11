import styled from 'styled-components';
import { paths } from 'components/App/constants';
import { Button } from 'src/components/Button';
import { Link } from 'src/components/Link';

const { leaderboard, profile, forum, tutorial } = paths;

const GameMenu = () => {
  return (
    <Page>
      <Container>
        <Button variant="secondary">ИГРАТЬ</Button>
        <Wrapper>
          <ListItem>
            <Link to={tutorial} variant="size40">
              Туториал
            </Link>
          </ListItem>
          <ListItem>
            <Link to={profile.index} variant="size40">
              Профиль
            </Link>
          </ListItem>
          <ListItem>
            <Link to={leaderboard} variant="size40">
              Таблица Лидеров
            </Link>
          </ListItem>
          <ListItem>
            <Link to={forum.index} variant="size40">
              Форум
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" variant="size40">
              Выход
            </Link>
          </ListItem>
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
  height: 360px;
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
