import styled from 'styled-components';
import { TSignInRequest } from 'src/api/auth/models';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSingInMutation } from 'src/api/auth/auth';
import { paths } from 'src/App/constants';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { H1 } from 'src/design/H1';
import { formsConsts } from '../consts/formsConsts';

const registrationFields = [formsConsts.login, formsConsts.password];
const { menu } = paths;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInRequest>({
    mode: 'all',
  });
  const [login] = useSingInMutation();

  const submitForm: SubmitHandler<TSignInRequest> = async data => {
    try {
      const response = await login(data);

      response && navigate(menu);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <FormHeader>Login</FormHeader>
      <FormBody>
        {registrationFields.map(({ type, name, placeholder, label, validationRules }) => (
          <Input
            key={name}
            name={name}
            errorMessage={errors[name]?.message}
            type={type}
            label={label}
            placeholder={placeholder}
            register={register}
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
