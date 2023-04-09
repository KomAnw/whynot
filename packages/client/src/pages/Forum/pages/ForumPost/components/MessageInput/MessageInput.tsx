import {
  Form,
  Title,
  Button,
  Footer,
  Direction,
  Header,
  RestyledInput,
} from 'src/pages/Forum/pages/ForumPost/components/MessageInput/style';
import { useForm } from 'react-hook-form';
import { IconButtonSend } from 'pages/Forum/components/IconButtonSend';
import { logger } from 'src/utils/logger';
import { useGetUserQuery } from 'src/api/auth/auth';
import { usePostMessageMutation } from 'src/api/forum/messages/messages';
import type { TInputMessage, TMessageInputProps } from 'pages/Forum/pages/types';

const postId = Number(window.location.pathname.split('/').pop());

const MessageInput = ({ mainMessage, resetMainMessage }: TMessageInputProps) => {
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
    } catch (error) {
      logger(data, 'error');
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Header>
        <Title>Кому:</Title>
        <Direction>{mainMessage.id ? mainMessage.login : 'Всем'}</Direction>
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
