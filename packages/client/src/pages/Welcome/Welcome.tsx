import { H1 } from 'src/design/H1';
import styled from 'styled-components';
import { breakpoints, paths } from 'src/components/App/constants';
import image from 'assets/images/welcome.jpg';
import { Button } from 'src/components/Button';
import { Link } from 'react-router-dom';
import { ButtonVariants } from 'src/components/Button/types';
import { Children } from 'react';

const { login, registration } = paths;
const buttons = [
  {
    variant: 'primary' as ButtonVariants,
    to: login,
    text: 'Войти',
  },
  {
    variant: 'secondary' as ButtonVariants,
    to: registration,
    text: 'Регистрация',
  },
];

const Buttons = () => {
  return (
    <ButtonsContainer>
      {buttons.map(({ variant, text, to }) => (
        <Link to={to} key={text}>
          <Button variant={variant}>{text}</Button>
        </Link>
      ))}
    </ButtonsContainer>
  );
};

const Welcome = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <Title>Добро пожаловать в игру</Title>
        <Image />
        <Buttons />
      </InnerContainer>
    </OuterContainer>
  );
};

export default Welcome;

const OuterContainer = styled('div')`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled('div')`
  width: max-content;
  height: max-content;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.core.background.primary};
  padding: 24px 90px;

  @media (max-width: ${breakpoints.mobileM}) {
    padding: 12px 14px;
  }
`;

const ButtonsContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(${({ children }) => Children.count(children)}, max-content);
  justify-content: center;
  gap: 48px;
  margin-top: 18px;
  @media (max-width: ${breakpoints.mobileM}) {
    gap: 18px;
    margin-top: 15px;
  }
`;

const Title = styled(H1)`
  margin: 0;
`;

const Image = styled('img')`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 540px;

  @media (max-width: ${breakpoints.mobileM}) {
    height: 482px;
  }
`;
