import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { IconButtonSend } from 'pages/Forum/components/IconButtonSend';
import { Text } from 'src/design/Text';
import { Input } from 'src/components/Input';
import { InputStyled, ValidationText, LabelStyled } from 'src/components/Input/Input';
import { logger } from 'src/utils/logger';
import { useGetUserQuery } from 'src/api/auth/auth';
import { usePostMessageMutation } from 'src/api/forum/messages/messages';
import type { TInputMessage, TMessageInputProps } from 'pages/Forum/pages/types';

const postId = Number(window.location.pathname.split('/').pop());

const MessageInput = ({ refreshPage, mainMessage, resetMainMessage }: TMessageInputProps) => {
  const { data: dataUser } = useGetUserQuery();
  const [GetMessage] = usePostMessageMutation();

  const { resetField, register, handleSubmit } = useForm<TInputMessage>({
    mode: 'all',
  });

  const submitForm = async (data: TInputMessage) => {
    try {
      if (dataUser) {
        await GetMessage({
          text: data.inputMessage,
          authorId: dataUser.id,
          postId,
          login: dataUser.login,
          date: new Date(),
          mainMessageId: mainMessage.id,
          emojis: [],
        });
      }
      resetField('inputMessage');
      resetMainMessage();
      refreshPage();
    } catch (error) {
      logger(data, 'error');
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Header>
        <Title>Кому:</Title>
        <Direction>{mainMessage.id === 0 ? 'Всем' : mainMessage.login}</Direction>
      </Header>
      <Footer>
        <RestyledInput
          label=""
          name="inputMessage"
          placeholder="Напишите сообщение"
          register={register}
          type="text"
          validationRules={{}}
        />
        <Button type="submit">
          <IconButtonSend />
        </Button>
      </Footer>
    </Form>
  );
};

export default MessageInput;

const Form = styled('form')`
  display: grid;
  width: 100%;
  grid-template-rows: auto auto;
`;

const Header = styled('div')`
  display: flex;
`;

const Title = styled(Text)`
  margin-left: 32px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Direction = styled(Text)`
  margin-left: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
`;

const Footer = styled('div')`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 36px;
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
