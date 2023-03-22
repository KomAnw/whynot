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
      <Header>
        <Title>Кому:</Title>
        <Direction>Всем</Direction>
      </Header>
      <Footer>
        <InputStyled type="text" placeholder="Создать новую тему" {...register('inputPosts')} />
        <Button type="submit" />
      </Footer>
    </Form>
  );
};

export default ForumMessageInput;

const Form = styled('form')`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
`;

const Header = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: start;
`;

const Title = styled('div')`
  margin-left: 32px;
  display: grid;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Direction = styled('div')`
  margin-left: 5px;
  display: grid;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
`;

const Footer = styled('div')`
  display: grid;
  grid-template-columns: auto max-content;
  grid-template-rows: 36px;
  grid-column-gap: 10px;
  align-items: center;
`;

const InputStyled = styled(LinkText).attrs({ as: 'input' })<InputHTMLAttributes<HTMLInputElement>>`
  box-sizing: border-box;
  border-radius: 18px;
  padding-left: 26px;
  width: 100%;
  height: 100%;
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
