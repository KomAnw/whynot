import { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from 'assets/images/background.png';
import { switchToFullScreen } from 'pages/Settings/fullscreenSlice';
import { useAppDispatch } from 'src/hooks/redux';

const Layout = () => {
  const dispatch = useAppDispatch();

  const onEscapePressHandler = useCallback(() => {
    if (!document.fullscreenElement) {
      dispatch(switchToFullScreen(false));
    }
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', onEscapePressHandler);

    return () => document.removeEventListener('fullscreenchange', onEscapePressHandler);
  }, [onEscapePressHandler]);

  return (
    <div>
      <BackgroundContainer>
        <Outlet />
      </BackgroundContainer>
    </div>
  );
};

export default Layout;

export const BackgroundContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
`;
