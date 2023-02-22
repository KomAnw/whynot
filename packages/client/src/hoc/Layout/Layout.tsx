import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from 'assets/images/background.png';
import toggleFullScreen from 'src/utils/fullscreenApi';

const Layout = () => {
  document.addEventListener('keydown', e => {
    if (e.key === 'f') {
      toggleFullScreen();
    }
  });

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
