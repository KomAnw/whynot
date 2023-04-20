import { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { switchToFullScreen } from 'pages/Settings/fullscreenSlice';
import { useAppDispatch } from 'src/hooks/redux';

const backgroundImg = '/images/common/background.png';

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
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.core.divider};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.core.text.primary};
  }
`;
