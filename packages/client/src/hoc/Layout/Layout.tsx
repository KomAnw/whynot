import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <BackgroundContainer>
      <Outlet />
    </BackgroundContainer>
  );
};

export default Layout;

const BackgroundContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  /* Картинка или стили для заднего фона будут тут */
`;
