import styled from 'styled-components';
import { TSignInRequest } from 'src/api/auth/models';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSingInMutation } from 'src/api/auth/auth';
import { paths } from 'src/components/App/constants';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { H1 } from 'src/design/H1';
import { Link } from 'src/components/Link';
import { useState } from 'react';
import { Text } from 'src/design/Text';
import { formsConsts } from '../consts/formsConsts';

const registrationFields = [formsConsts.login, formsConsts.password];
const { menu, registration } = paths;

export const Login = () => {
  const [commonError, setCommonError] = useState(false);
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
      const response = await login(data).unwrap();

      if (response) {
        setCommonError(false);
        navigate(menu);
        localStorage.clear();
      }
    } catch (error) {
      setCommonError(true);
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
        {commonError && <Error>Wrong username or password</Error>}
        <Button variant="primary" type="submit">
          LOGIN
        </Button>
        <Link to={registration} variant="size24">
          Registration
        </Link>
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
  position: relative;
  display: grid;
  justify-items: center;
  gap: 10px;
  margin-top: 45px;
`;

const Error = styled(Text)`
  width: max-content;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.core.text.error};
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
`;
