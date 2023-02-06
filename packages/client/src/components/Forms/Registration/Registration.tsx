import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';
import { registrationFields } from './consts/RegistrationConsts';

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const submitForm = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      {registrationFields.map(({ type, name, placeholder, validationRules }) => (
        <div key={name}>
          <input type={type} placeholder={placeholder} {...register(name, { ...validationRules })} />
          <ErrorMessage errors={errors} name={name} render={({ message }) => <p>{message}</p>} />
        </div>
      ))}
      <button type="submit">Регистрация</button>
    </Form>
  );
};

export default Registration;

const Form = styled('form')`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 50px auto;
`;
