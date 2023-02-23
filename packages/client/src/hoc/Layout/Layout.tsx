import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from 'assets/images/background.png';
import toggleFullScreen from 'src/utils/fullscreenApi';

const Layout = () => {
  useEffect(() => {
    document.addEventListener('keydown', toggleFullScreen);

    return () => document.removeEventListener('keydown', toggleFullScreen);
  }, []);

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
