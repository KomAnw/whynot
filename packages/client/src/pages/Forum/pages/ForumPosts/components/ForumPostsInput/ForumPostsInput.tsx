import styled from 'styled-components';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { InputHTMLAttributes } from 'react';
import { LinkText } from 'src/design/LinkText';
import { IconButtonSend } from 'pages/Forum/components/IconButtonSend';

export type TInputPost = {
  inputPost: string;
};

const ForumPostsInput = () => {
  const { resetField, register, handleSubmit } = useForm<TInputPost>({
    mode: 'all',
  });

  const submitForm: SubmitHandler<TInputPost> = async data => {
    try {
      resetField('inputPost');
      // eslint-disable-next-line no-console
      console.log(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <InputStyled type="text" placeholder="Создать новую тему" {...register('inputPost')} />
      <Button type="submit">
        <IconButtonSend />
      </Button>
    </Form>
  );
};

export default ForumPostsInput;

const Form = styled('form')`
  display: grid;
  width: 100%;
  grid-template-columns: auto max-content;
  grid-template-rows: auto;
  grid-column-gap: 10px;
  align-items: center;
`;

const InputStyled = styled(LinkText).attrs({ as: 'input' })<InputHTMLAttributes<HTMLInputElement>>`
  box-sizing: border-box;
  border-radius: 18px;
  padding-left: 26px;
  width: 100%;
  height: 36px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.control.input.backgroundSecondary};
  border: none;
  color: ${({ theme }) => theme.colors.control.input.color};
  font-weight: 700;
  &::placeholder {
    color: ${({ theme }) => theme.colors.control.input.placeHolderSecondary};
    font-weight: 400;
  }
`;

const Button = styled('button')`
  border: 0;
  width: 26px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  cursor: pointer;
  path {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
  &:hover {
    opacity: 0.7;
  }
`;
