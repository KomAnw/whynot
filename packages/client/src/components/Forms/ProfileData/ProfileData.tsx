import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { H1 } from 'src/design/H1';
import { Link } from 'src/components/Link';
import { breakpoints, paths } from 'src/components/App/constants';
import { profileDateFields } from './consts/ProfileDataConsts';

const { profile } = paths;
const { mobileM } = breakpoints;

const ProfileData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  // eslint-disable-next-line no-console
  const submitForm = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <FormHeader>
        <H1Style>Редактирование данных</H1Style>
      </FormHeader>
      <FormBody>
        {profileDateFields.map(({ type, name, placeholder, label, validationRules }) => (
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
          СОХРАНИТЬ
        </Button>
        <Link to={profile.index} variant="size30">
          Назад
        </Link>
      </FormFooter>
    </Form>
  );
};

export default ProfileData;

const H1Style = styled(H1)`
  margin: 0;
`;

const FormHeader = styled(`div`)`
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
  flex-direction: row;
  align-items: center;
  gap: 100px;
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
