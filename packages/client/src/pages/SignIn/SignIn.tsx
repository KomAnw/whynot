import styled from 'styled-components';
import Login from 'components/Forms/Login';
import { breakpoints } from 'components/App/constants';
import { H1 } from 'src/design/H1';

const { mobileM } = breakpoints;

const SignIn = () => {
  return (
    <Wrapper>
      <LoginComponent>
        <Title>Login</Title>
        <Login />
      </LoginComponent>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
`;

const LoginComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 402px;
  height: 372px;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  padding: 14px 19px 24px 29px;
  @media (max-width: ${mobileM}) {
    width: 354px;
    height: 372px;
  }
`;

const Title = styled(H1)`
  margin: 0 auto;
  width: max-content;
`;
