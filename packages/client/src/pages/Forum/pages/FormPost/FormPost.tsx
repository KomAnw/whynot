import {
  PageContainer,
  Footer,
  Main,
  Title,
  TitlePost,
  NamePost,
  Component,
} from 'src/pages/Forum/pages/FormPost/style';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import MessageInput from 'pages/Forum/pages/FormPost/components/MessageInput';
import MessageElement from 'pages/Forum/pages/FormPost/components/MessageElement';
import { IconPost } from 'pages/Forum/components/IconPost';
import { useGetPostByIdMutation } from 'src/api/forum/posts/posts';
import { useGetMessagesByPostIdMutation, usePostEmojiMutation } from 'src/api/forum/messages/messages';
import { useGetUserQuery } from 'src/api/auth/auth';
import { useState } from 'react';
import type { TPost } from 'src/api/forum/posts/models';
import type { THandleAddEmoji, TMainMessage } from 'pages/Forum/pages/types';
import type { TMessageWithID } from 'src/api/forum/messages/models';
import { logger } from 'src/utils/logger';
import { useDidMount } from 'src/hooks/react';

const { forum } = paths;

const FormPost = () => {
  const postId = Number(window.location.pathname.split('/').pop());
  const { data: dataUser } = useGetUserQuery();

  const [GetPostById] = useGetPostByIdMutation();
  const [post, setPost] = useState<TPost>();

  const [GetMessageByPostId] = useGetMessagesByPostIdMutation();
  const [messages, setMessages] = useState<Array<TMessageWithID>>([]);

  const [getPostEmoji] = usePostEmojiMutation();

  const [mainMessage, setMainMessage] = useState<TMainMessage>({ id: 0, login: '' });

  const GetPostHandler = async () => {
    try {
      const data = await GetPostById(postId).unwrap();

      setPost(data);
    } catch (err) {
      logger(err, 'error');
    }
  };

  const GetMessagesHandler = async () => {
    try {
      const messages = await GetMessageByPostId(postId).unwrap();

      messages && setMessages(messages);
    } catch (err) {
      logger(err, 'error');
    }
  };

  const handleAddEmoji = async ({ messageId, authorId, emojiId }: THandleAddEmoji) => {
    try {
      if (dataUser && dataUser?.id !== authorId) {
        const message = await getPostEmoji({ postId, messageId, authorId: dataUser.id, emojiId }).unwrap();

        message && (await GetMessagesHandler());
      }
    } catch (err) {
      logger(err, 'error');
    }
  };

  const handleAddMainMessage = (data: TMainMessage) => {
    setMainMessage(data);
  };

  const handleResetMainMessage = () => {
    setMainMessage({ id: 0, login: '' });
  };

  useDidMount(() => {
    GetPostHandler();
    GetMessagesHandler();
  });

  return (
    <PageContainer>
      <Component>
        <Title>Forum</Title>
        <TitlePost>
          <IconPost />
          <NamePost>{post && post.text}</NamePost>
        </TitlePost>
        <Main>
          {' '}
          {messages &&
            messages.map(item => (
              <MessageElement {...item} key={item.id} addEmoji={handleAddEmoji} addMainMessage={handleAddMainMessage} />
            ))}
        </Main>
        <Footer>
          <MessageInput
            refreshPage={GetMessagesHandler}
            mainMessage={mainMessage}
            resetMainMessage={handleResetMainMessage}
          />
          <Link to={forum.index} variant="size30">
            Back to posts
          </Link>
        </Footer>
      </Component>
    </PageContainer>
  );
};

export default FormPost;
