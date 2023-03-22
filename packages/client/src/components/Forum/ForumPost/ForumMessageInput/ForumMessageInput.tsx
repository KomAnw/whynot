import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import { LinkText } from 'src/design/LinkText';

export type TInputPost = {
  inputPosts: string;
};

const ForumMessageInput = () => {
  const { resetField, register, handleSubmit } = useForm<TInputPost>({
    mode: 'all',
  });

  const submitForm: SubmitHandler<TInputPost> = async data => {
    try {
      resetField('inputPosts');
      // eslint-disable-next-line no-console
      console.log(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <InputStyled type="text" placeholder="Создать новую тему" {...register('inputPosts')} />
      <Button type="submit" />
    </Form>
  );
};

export default ForumMessageInput;

const Form = styled('form')`
  display: grid;
  width: 100%;
  grid-template-columns: auto max-content;
  grid-template-rows: auto;
  grid-column-gap: 10px;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 0;
`;

const InputStyled = styled(LinkText).attrs({ as: 'input' })<InputHTMLAttributes<HTMLInputElement>>`
  box-sizing: border-box;
  border-radius: 18px;
  padding-left: 26px;
  width: 100%;
  height: 36px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.control.input.background};
  border: none;
  color: ${({ theme }) => theme.colors.control.input.color};
  font-weight: 700;
  &::placeholder {
    color: ${({ theme }) => theme.colors.control.input.placeHolder};
    font-weight: 400;
  }
`;

const Button = styled('button')`
  border: 0;
  width: 26px;
  height: 26px;
  background: url(/images/forum/icon3.svg) no-repeat;
  background-size: cover;
`;