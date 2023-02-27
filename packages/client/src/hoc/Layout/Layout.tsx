import { KeyboardEvent, useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from 'assets/images/background.png';
import { fullScreenSwitching } from 'src/utils/fullscreenApi';
import { switchToFullScreen } from 'pages/Settings/fullscreenSlice';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';

const Layout = () => {
  const dispatch = useAppDispatch();
  const fullscreenSwitchOn = useAppSelector(state => state.fullscreen.switchOn);
  const eventKey = useCallback(
    (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === 'f') {
        fullScreenSwitching();
        dispatch(switchToFullScreen(!fullscreenSwitchOn));
      }
      if (e.key === 'Escape') {
        dispatch(switchToFullScreen(false));
        document.exitFullscreen();
      }
    },
    [dispatch, fullscreenSwitchOn]
  );

  useEffect(() => {
    // @ts-ignore
    document.addEventListener('keydown', eventKey);

    // @ts-ignore
    return () => document.removeEventListener('keydown', eventKey);
  }, [eventKey]);

  return (
    <BackgroundContainer>
      <Outlet />
    </BackgroundContainer>
  );
};

export default Layout;

export const BackgroundContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
`;
