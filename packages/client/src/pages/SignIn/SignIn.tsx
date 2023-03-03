import styled from 'styled-components';
import Login from 'components/Forms/Login';
import { breakpoints } from 'src/components/App/constants';

const { mobileM } = breakpoints;

const SignIn = () => {
  return (
    <Wrapper>
      <LoginComponent>
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
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  padding: 14px 19px 24px 29px;
  @media (max-width: ${mobileM}) {
    width: 354px;
  }
`;
