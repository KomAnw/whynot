import styled from 'styled-components';

export const Login = () => {
  return (
    <Form>
      <input />
      <input />
      <button>Signin</button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
