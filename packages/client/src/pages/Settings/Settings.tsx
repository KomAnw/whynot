import styled from 'styled-components';
import { breakpoints, sprites } from 'src/App/constants';
import { H1 } from 'src/design/H1';
import { paths } from 'src/App/constants';
import { Link } from 'components/Link';
import { Button } from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { changeMode } from 'pages/Game/modeSlice';

const { mobileM } = breakpoints;
const { menu } = paths;

const Settings = () => {
  const dispatch = useDispatch();
  const sprite = useSelector((state: RootState) => state.mode.sprite);
  const onLeft = () => {
    const currentIndex = sprites.findIndex(item => item.name === sprite.name);

    if (currentIndex === 0) {
      dispatch(changeMode(sprites[sprites.length - 1]));
    } else {
      dispatch(changeMode(sprites[currentIndex - 1]));
    }
  };

  const onRight = () => {
    const currentIndex = sprites.findIndex(item => item.name === sprite.name);

    if (currentIndex === sprites.length - 1) {
      dispatch(changeMode(sprites[0]));
    } else {
      dispatch(changeMode(sprites[currentIndex + 1]));
    }
  };

  return (
    <Wrapper>
      <LeaderboardComponent>
        <LeaderboardH1>Settings</LeaderboardH1>
        <Column>
          <Row>
            <div>
              <Button variant="primary" type="submit" onClick={onLeft}>
                ◀︎
              </Button>
            </div>
            <div>
              <Img src={sprite.sprite} />
            </div>
            <div>
              <Button variant="primary" type="submit" onClick={onRight}>
                ▶︎
              </Button>
            </div>
          </Row>
          <NameMode>{sprite.name}</NameMode>
        </Column>
        <Link variant="size30" to={menu}>
          Back to menu
        </Link>
      </LeaderboardComponent>
    </Wrapper>
  );
};

export default Settings;

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

const Column = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  align-items: last;
  justify-content: center;
`;

const Row = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Img = styled.img`
  object-fit: none;
  object-position: -30px -121px;
  width: 85px;
  height: 81px;
`;

const NameMode = styled(H1)`
  display: flex;
  justify-content: center;
`;
