import styled from 'styled-components';
import type { TSignInRequest } from 'src/api/auth/models';
import { useNavigate } from 'react-router-dom';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useSingInMutation } from 'src/api/auth/auth';
import { paths } from 'src/components/App/constants';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { H1 } from 'src/design/H1';
import { Link } from 'src/components/Link';
import { useState } from 'react';
import { Text } from 'src/design/Text';
import { Divider } from 'components/Divider';
import { redirectToOAuthYandex, useLazyGetServiceIdQuery } from 'src/api/oauth/oauth';
import { YandexLogo, Path } from 'components/Forms/Login/components/YandexLogo';
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
  const [getServiceId] = useLazyGetServiceIdQuery();

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

  const OAuthHandler = async () => {
    try {
      const { data } = await getServiceId();

      const serviceId = data?.service_id;

      serviceId && redirectToOAuthYandex(serviceId);
    } catch (e) {
      console.log(e);
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
        <Divider> Or login with </Divider>
        <OAuthButton variant="primary" type="button" onClick={OAuthHandler}>
          <OAuthContent>
            <YandexLogo />
            Yandex ID
          </OAuthContent>
        </OAuthButton>
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
  width: 100%;
  gap: 10px;
`;

const FormHeader = styled(H1)`
  margin: 0 auto;
  width: max-content;
`;

const FormBody = styled('div')`
  width: 100%;
`;

const FormFooter = styled('div')`
  position: relative;
  display: grid;
  justify-items: center;

  a:last-child {
    margin-top: 20px;
  }
`;

const Error = styled(Text)`
  width: max-content;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.core.text.error};
  position: absolute;
  top: -37px;
  left: 50%;
  transform: translateX(-50%);
`;

const OAuthButton = styled(Button)`
  background: black;

  &:hover {
    background: #fc3f1d;

    ${Path} {
      fill: black;
    }
  }
`;

const OAuthContent = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
