/* eslint-disable jsx-a11y/label-has-associated-control */
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from 'src/hooks/redux';
import { ISignInData } from 'src/store/reducers/userSlice';
import { singIn } from 'src/api/userAPI';

const SignInPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const submitForm = (data: ISignInData) => {
    dispatch(singIn(data));
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
