/* eslint-disable jsx-a11y/label-has-associated-control */
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { TSignInData } from 'src/api/auth/models';
import { useNavigate } from 'react-router-dom';
import { paths } from 'components/App/constants';
import { useSingInMutation } from 'src/api/auth/auth';

const { game } = paths;

const SignInPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [login] = useSingInMutation();

  const submitForm = async (data: TSignInData) => {
    try {
      const response = await login(data);

      response && navigate(game.index);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm as SubmitHandler<FieldValues>)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" className="form-input" {...register('login')} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-input" {...register('password')} required />
      </div>
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};

export default SignInPage;


// import styled from 'styled-components';
// import Login from 'components/Forms/Login';
// import { breakpoints } from 'components/App/constants';
// import { Label } from 'src/design/Label';
//
// const { mobileM } = breakpoints;
//
// const SignIn = () => {
//   return (
//     <Wrapper>
//       <LoginComponent>
//         <Label>Login</Label>
//         <Login />
//       </LoginComponent>
//     </Wrapper>
//   );
// };
//
// export default SignIn;
//
// const Wrapper = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-family: ${({ theme }) => theme.fonts.main};
// `;
//
// const LoginComponent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 402px;
//   height: 372px;
//   box-shadow: 0 0 6px ${({ theme }) => theme.colors.core.background.primary};
//   border-radius: 20px;
//   background-color: ${({ theme }) => theme.colors.core.background.primary};
//   @media (max-width: ${mobileM}) {
//     width: 354px;
//     height: 372px;
//   }
// `;
