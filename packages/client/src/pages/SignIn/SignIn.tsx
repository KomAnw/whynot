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
      // eslint-disable-next-line no-console
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
