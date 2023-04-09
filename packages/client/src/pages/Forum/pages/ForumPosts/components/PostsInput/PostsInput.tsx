import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { IconButtonSend } from 'pages/Forum/components/IconButtonSend';
import { Input } from 'components/Input';
import { InputStyled, ValidationText, LabelStyled } from 'src/components/Input/Input';
import { logger } from 'src/utils/logger';
import { usePostPostMutation } from 'src/api/forum/posts/posts';
import { useGetUserQuery } from 'src/api/auth/auth';

export type TInputPost = {
  inputPosts: string;
};

const PostsInput = () => {
  const { data: dataUser } = useGetUserQuery();
  const [postApi] = usePostPostMutation();

  const { resetField, register, handleSubmit } = useForm<TInputPost>({
    mode: 'all',
  });

  const submitForm = async (dataPost: TInputPost) => {
    try {
      if (dataUser) {
        await postApi({
          text: dataPost.inputPosts,
          authorId: dataUser.id,
          login: dataUser.login,
          date: new Date(),
        });
      }
      resetField('inputPosts');
    } catch (error) {
      logger(error, 'error');
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <RestyledInput
        label=""
        name="inputPosts"
        placeholder="Создать новую тему"
        register={register}
        type="text"
        validationRules={{}}
      />
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

const RestyledInput = styled(Input)`
  ${InputStyled} {
    border-radius: 18px;
    height: 36px;
    background-color: ${({ theme }) => theme.colors.control.input.backgroundSecondary};
    &::placeholder {
      color: ${({ theme }) => theme.colors.control.input.placeHolderSecondary};
    }
  }
  ${LabelStyled} {
    display: none;
  }
  ${ValidationText} {
    display: none;
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
