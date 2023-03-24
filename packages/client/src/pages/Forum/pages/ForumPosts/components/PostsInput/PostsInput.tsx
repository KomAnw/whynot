import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import { Text } from 'src/design/Text';
import { IconButtonSend } from 'pages/Forum/components/IconButtonSend';

export type TInputPost = {
  inputPost: string;
};

const PostsInput = () => {
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

export default PostsInput;

const Form = styled('form')`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
`;

const InputStyled = styled(Text).attrs({ as: 'input' })<InputHTMLAttributes<HTMLInputElement>>`
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
  font-size: 24px;
  line-height: 27px;
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
