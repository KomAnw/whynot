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
import { soundSwitchOn } from 'pages/Settings/soundSlice';
import { updateTheme } from 'src/api/theme/theme';
import { useGetUserQuery } from 'src/api/auth/auth';
import { updateMode } from 'src/api/mode/mode';
import type { TSprite } from 'pages/Game/types/types';
import { switchToGamepad } from './gamepadSlice';

const { mobileM } = breakpoints;
const { menu } = paths;

const Settings = () => {
  const { data: user } = useGetUserQuery();
  const dispatch = useAppDispatch();
  const sprite = useAppSelector(state => state.mode.sprite);
  const theme = useAppSelector(state => state.theme.name);
  const fullscreenSwitchOn = useAppSelector(state => state.fullscreen.switchOn);
  const gamepadSwitchOn = useAppSelector(state => state.gamepad.gamepadOn);
  const soundOn = useAppSelector(state => state.sound.soundOn);

  const themeHandler = async () => {
    dispatch(changeTheme());

    if (user?.id) {
      await updateTheme({
        theme: theme === 'default' ? 'other' : 'default',
        userId: user.id,
      });
    }
  };

  const modeHandler = async (direction: 'left' | 'right') => {
    const currentIndex = sprites.findIndex(item => item.name === sprite.name);

    if (user?.id) {
      let currentSprite: TSprite = sprites[0];

      if (direction === 'left') {
        currentSprite = currentIndex === 0 ? sprites[sprites.length - 1] : sprites[currentIndex - 1];
      } else if (direction === 'right') {
        currentSprite = currentIndex === sprites.length - 1 ? sprites[0] : sprites[currentIndex + 1];
      }

      dispatch(changeMode(currentSprite));

      await updateMode({
        userId: user.id,
        mode: currentSprite.name,
      });
    }
  };

  const onLeft = () => {
    modeHandler('left');
  };

  const onRight = () => {
    modeHandler('right');
  };

  const switchOnFullScreen = () => {
    fullScreenSwitching();
    dispatch(switchToFullScreen(!fullscreenSwitchOn));
  };

  const switchOnGamepad = () => {
    dispatch(switchToGamepad(!gamepadSwitchOn));
  };

  const switchOnSound = () => {
    dispatch(soundSwitchOn(!soundOn));
  };

  return (
    <Wrapper>
      <SettingsComponent>
        <SettingsH1>Settings</SettingsH1>
        <Column>
          <Row>
            <Text>Dark theme</Text>
            <Switch onClick={themeHandler} id="theme" isChecked={theme === 'other'} />
          </Row>
          <Row>
            <Text>Switch to full screen</Text>
            <Switch onClick={switchOnFullScreen} id="fullscreen" isChecked={fullscreenSwitchOn} />
          </Row>
          <Row>
            <Text>Use gamepad</Text>
            <Switch onClick={switchOnGamepad} id="gamepad" isChecked={gamepadSwitchOn} />
          </Row>
          <Row>
            <Text>Sound on</Text>
            <Switch onClick={switchOnSound} id="sound" isChecked={soundOn} />
          </Row>
          <Row>
            <Text>Change mode</Text>
          </Row>
          <Row>
            <RestyledButton variant="secondary" type="submit" onClick={onLeft}>
              ◀︎
            </RestyledButton>
            <Img src={sprite.sprite} />
            <RestyledButton variant="secondary" type="submit" onClick={onRight}>
              ▶︎
            </RestyledButton>
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
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingsComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 636px;
  padding: 12px 20px;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};

  @media (max-width: ${mobileM}) {
    width: 354px;
  }
`;

export const SettingsH1 = styled(H1)`
  height: 45px;
  margin: 14px 0 0 0;
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
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
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RestyledButton = styled(Button)`
  width: 100px;
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
