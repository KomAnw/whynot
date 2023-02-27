import { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from 'assets/images/background.png';
import { switchToFullScreen } from 'pages/Settings/fullscreenSlice';
import { useAppDispatch } from 'src/hooks/redux';

const Layout = () => {
  const dispatch = useAppDispatch();

  const handler = useCallback(() => {
    if (!document.fullscreenElement) {
      dispatch(switchToFullScreen(false));
    }
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handler);

    return () => document.removeEventListener('fullscreenchange', handler);
  }, [handler]);

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
