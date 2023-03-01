import styled from 'styled-components';
import { breakpoints, sprites } from 'components/App/constants';
import { H1 } from 'src/design/H1';
import { paths } from 'components/App/constants';
import { Link } from 'components/Link';
import { Button } from 'components/Button';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { changeMode } from 'pages/Game/modeSlice';
import Switch from 'components/Switch';
import { Text } from 'src/design/Text';
import { changeTheme } from 'src/hoc/ThemeWrapper/themeSlice';
import { switchToFullScreen } from 'pages/Settings/fullscreenSlice';
import { fullScreenSwitching } from 'src/utils/fullscreenApi';

const { mobileM } = breakpoints;
const { menu } = paths;

const Settings = () => {
  const dispatch = useAppDispatch();
  const sprite = useAppSelector(state => state.mode.sprite);
  const theme = useAppSelector(state => state.theme.name);
  const fullscreenSwitchOn = useAppSelector(state => state.fullscreen.switchOn);

  const themeHandler = () => dispatch(changeTheme());

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

  const switchTheme = () => {
    themeHandler();
  };

  const switchOnFullScreen = () => {
    fullScreenSwitching();
    dispatch(switchToFullScreen(!fullscreenSwitchOn));
  };

  return (
    <Wrapper>
      <SettingsComponent>
        <SettingsH1>Settings</SettingsH1>
        <Column>
          <Row>
            <Text>Dark theme</Text>
            <Switch onClick={switchTheme} id="theme" isChecked={theme === 'other'} />
          </Row>
          <Row>
            <Text>Switch to full screen</Text>
            <Switch onClick={switchOnFullScreen} id="fullscreen" isChecked={fullscreenSwitchOn} />
          </Row>
          <Row>
            <Text>Change mode</Text>
          </Row>
          <Row>
            <Button variant="secondary" type="submit" onClick={onLeft}>
              ◀︎
            </Button>
            <Img src={sprite.sprite} />
            <Button variant="secondary" type="submit" onClick={onRight}>
              ▶︎
            </Button>
          </Row>
          <NameMode>{sprite.name}</NameMode>
        </Column>
        <Link variant="size30" to={menu}>
          Back to menu
        </Link>
      </SettingsComponent>
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

const SettingsComponent = styled.div`
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

const SettingsH1 = styled(H1)`
  font-size: 48px;
  line-height: 54px;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

const Row = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  object-fit: none;
  object-position: -20px -121px;
  width: 91px;
  height: 81px;
`;

const NameMode = styled(H1)`
  display: flex;
  justify-content: center;
`;
