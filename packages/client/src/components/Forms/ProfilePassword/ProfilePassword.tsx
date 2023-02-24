import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { H1 } from 'src/design/H1';
import { Link } from 'src/components/Link';
import { breakpoints, paths } from 'src/App/constants';
import { formsConsts } from 'src/components/Forms/consts/formsConsts';
import { useChangePasswordMutation } from 'src/api/user/user';
import { useNavigate } from 'react-router-dom';
import { TPasswordNewRequest } from './types';

const { password, confirmPassword, oldPassword } = formsConsts;
const { profile } = paths;
const { mobileM } = breakpoints;

const ProfilePassword = () => {
  const [passwordApi] = useChangePasswordMutation();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TPasswordNewRequest>({
    mode: 'all',
  });

  const submitForm: SubmitHandler<TPasswordNewRequest> = async data => {
    try {
      const response = await passwordApi({ oldPassword: data.oldPassword, newPassword: data.confirmPassword });

      response && navigate(profile.index);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <H1Style>Edit password</H1Style>
      <FormBody>
        <Input
          key={oldPassword.name}
          register={register}
          errorMessage={errors[oldPassword.name]?.message}
          name={oldPassword.name}
          type={oldPassword.type}
          label={oldPassword.label}
          placeholder={oldPassword.placeholder}
          validationRules={oldPassword.validationRules}
        />
        <Input
          key={password.name}
          register={register}
          errorMessage={errors[password.name]?.message}
          name={password.name}
          type={password.type}
          label={password.label}
          placeholder={password.placeholder}
          validationRules={password.validationRules}
        />
        <Input
          key={confirmPassword.name}
          register={register}
          errorMessage={errors[confirmPassword.name]?.message}
          name={confirmPassword.name}
          type={confirmPassword.type}
          label={confirmPassword.label}
          placeholder={confirmPassword.placeholder}
          validationRules={{
            required: confirmPassword.validationRules.required,
            validate: {
              ...confirmPassword.validationRules.validate,
              confirmPassword: (val: string) => {
                if (watch('password') !== val) {
                  return 'Your passwords do not match';
                }
              },
            },
          }}
        />
      </FormBody>
      <FormFooter>
        <Button variant="primary" type="submit">
          Apply
        </Button>
        <Link to={profile.index} variant="size20">
          Back
        </Link>
      </FormFooter>
    </Form>
  );
};

export default ProfilePassword;

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
  margin: 27px auto 0;
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
  padding: 12px 24px;
  @media (max-width: ${mobileM}) {
    padding: 12px;
  }
`;
