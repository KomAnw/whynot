/* eslint-disable jsx-a11y/label-has-associated-control */
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useSingInMutation } from 'src/api/authAPI';
import { TSignInData } from 'src/api/authAPI/models';
import { useNavigate } from 'react-router-dom';
import { paths } from 'components/App/constants';

const { game } = paths;

const SignInPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [login, { isLoading }] = useSingInMutation();

  const submitForm = (data: TSignInData) => {
    login(data);

    /**
     * TODO Заменить таймаут на нормальное решение.
     * Проблема в том, что мы получаем строку вместо json и статус rejected.
     */
    setTimeout(() => {
      navigate(game);
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit(submitForm as SubmitHandler<FieldValues>)}>
      {isLoading && <div>Loading...</div>}
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
