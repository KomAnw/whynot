import styled from 'styled-components';
import { TSignInRequest } from 'src/api/auth/models';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useSingInMutation } from 'src/api/auth/auth';
import { paths } from 'components/App/constants';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { H1 } from 'src/design/H1';
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

  const submitForm = async (data: TSignInRequest) => {
    try {
      const response = await login(data);

      response && navigate(game.index);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm as SubmitHandler<FieldValues>)}>
      <FormHeader>Login</FormHeader>
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

const FormHeader = styled(H1)`
  margin: 0 auto;
  width: max-content;
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
