import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { H1 } from 'src/design/H1';
import { Link } from 'components/Link';
import { breakpoints, paths } from 'src/components/App/constants';
import { formsConsts } from 'src/components/Forms/consts/formsConsts';
import { TSignUpRequest } from 'src/api/auth/models';
import { useSingUpMutation } from 'src/api/auth/auth';
import { useNavigate } from 'react-router-dom';
import { saveToLocalStorage, setValueFromLocalStorageToField } from 'src/utils/storage';
import { useDidMount } from 'src/hooks/react';

const registrationFields = [
  formsConsts.firstName,
  formsConsts.secondName,
  formsConsts.login,
  formsConsts.email,
  formsConsts.phone,
  formsConsts.password,
];

const { login, menu } = paths;
const { mobileM } = breakpoints;

const Registration = () => {
  const [registration] = useSingUpMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TSignUpRequest>({
    mode: 'all',
  });

  useDidMount(() => {
    setValueFromLocalStorageToField(registrationFields, setValue);
  });

  const submitForm: SubmitHandler<TSignUpRequest> = async data => {
    try {
      const response = await registration(data);

      if (response) {
        navigate(menu);
        localStorage.clear();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)} onChange={saveToLocalStorage}>
      <H1Style> Registration </H1Style>
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
          REGISTER
        </Button>
        <Link to={login} variant="size24">
          LOGIN
        </Link>
      </FormFooter>
    </Form>
  );
};

export default Registration;

const H1Style = styled(H1)`
  height: 45px;
  text-align: center;
  margin: 0 0 12px 0;
`;

const FormBody = styled('div')`
  width: 354px;
  flex-grow: 1;
  @media (max-width: ${mobileM}) {
    width: 330px;
  }
`;

const FormFooter = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  margin: 3px auto 0;
`;

const Form = styled('form')`
  width: fit-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  padding: 6px 24px;
  @media (max-width: ${mobileM}) {
    padding: 6px;
  }
`;
