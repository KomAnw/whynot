import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from 'assets/images/background.png';

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
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
`;
