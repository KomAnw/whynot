import styled from "styled-components";

const SignIn = () => {
  return (
    <Wrapper>
      <LoginComponent>
        <Label>Login</Label>
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
  color: #000;
`;

const Label = styled.label`
  margin: 14px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;
