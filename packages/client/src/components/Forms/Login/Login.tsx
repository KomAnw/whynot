import styled from 'styled-components';
import { TSignInData } from 'src/api/auth/models';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useSingInMutation } from 'src/api/auth/auth';
import { paths } from 'components/App/constants';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { loginFields } from './consts/LoginConsts';

const { game } = paths;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
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
    <Form onSubmit={handleSubmit(submitForm as SubmitHandler<FieldValues>)}>
      <FormBody>
        {loginFields.map(({ type, name, placeholder, label, validationRules }) => (
          <Input
            key={name}
            register={register}
            errorMessage={errors[name]?.message as string}
            name={name}
            type={type}
            label={label}
            placeholder={placeholder}
            validationRules={validationRules}
          />
        ))}
      </FormBody>
      <FormFooter>
        <Button variant="primary" type="submit">
          LOGIN
        </Button>
      </FormFooter>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const FormBody = styled('div')`
  width: 354px;
`;

const FormFooter = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;
