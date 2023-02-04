import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const registrationFields = [
  { type: 'text', placeholder: 'First Name', name: 'firstName' },
  { type: 'text', placeholder: 'Last Name', name: 'lastName' },
  { type: 'email', placeholder: 'Email', name: 'email' },
  { type: 'password', placeholder: 'Password', name: 'passwordFirst' },
  { type: 'password', placeholder: 'Password', name: 'passwordSecond' },
];

const Registration = () => {
  const { register, handleSubmit, formState } = useForm();

  const submitForm = data => console.log(data, formState);

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      {registrationFields.map(({ type, name, placeholder }) => (
        <input type={type} placeholder={placeholder} key={name} {...register(name)} />
      ))}
      <button type="submit">Регистрация</button>
    </Form>
  );
};

export default Registration;

const Form = styled('form')``;
