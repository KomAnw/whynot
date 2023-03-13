import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { H1 } from 'src/design/H1';
import { Link } from 'src/components/Link';
import { breakpoints, paths } from 'src/components/App/constants';
import { formsConsts } from 'components/Forms/consts/formsConsts';
import { authApi, useGetUserQuery } from 'src/api/auth/auth';
import { TChangeProfileRequest } from 'src/api/user/models';
import { useChangeProfileMutation } from 'src/api/user/user';
import { saveToLocalStorage, setValueFromLocalStorageToField } from 'src/utils/storage';
import { useDidMount, useWillUnmount } from 'src/hooks/react';

const profileDateFields = [
  formsConsts.firstName,
  formsConsts.secondName,
  formsConsts.displayName,
  formsConsts.login,
  formsConsts.email,
  formsConsts.phone,
];

const { profile } = paths;
const { mobileM } = breakpoints;

const ProfileData = () => {
  const { data } = useGetUserQuery();
  const [userApi] = useChangeProfileMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TChangeProfileRequest>({
    mode: 'all',
    defaultValues: data,
  });

  const submitForm: SubmitHandler<TChangeProfileRequest> = async data => {
    try {
      const response = await userApi(data);

      dispatch(authApi.util.invalidateTags(['User']));

      if (response) {
        navigate(profile.index);
        localStorage.clear();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useDidMount(() => {
    setValueFromLocalStorageToField(profileDateFields, setValue);
  });

  useWillUnmount(() => {
    localStorage.clear();
  });

  return (
    <Form onSubmit={handleSubmit(submitForm)} onChange={saveToLocalStorage}>
      <H1Style>Profile edit</H1Style>
      <FormBody>
        {profileDateFields.map(({ type, name, placeholder, label, validationRules }) => (
          <Input
            key={name}
            register={register}
            errorMessage={errors[name]?.message}
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
          Apply
        </Button>
        <Link to={profile.index} variant="size20">
          back
        </Link>
      </FormFooter>
    </Form>
  );
};

export default ProfileData;

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
  margin: 0 auto 0;
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
