import {
  PageContainer,
  Footer,
  Main,
  Title,
  TitlePost,
  NamePost,
  Component,
} from 'src/pages/Forum/pages/ForumPost/style';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import MessageInput from 'pages/Forum/pages/ForumPost/components/MessageInput';
import MessageElement from 'pages/Forum/pages/ForumPost/components/MessageElement';
import { IconPost } from 'pages/Forum/components/IconPost';
import { useGetPostByIdQuery } from 'src/api/forum/posts/posts';
import { useGetMessagesByPostIdQuery, usePostEmojiMutation } from 'src/api/forum/messages/messages';
import { useGetUserQuery } from 'src/api/auth/auth';
import { useState } from 'react';
import type { THandleAddEmoji, TMainMessage } from 'pages/Forum/pages/types';
import { logger } from 'src/utils/logger';
import { useParams } from 'react-router-dom';

const { forum } = paths;

const ForumPost = () => {
  const params = useParams();
  const postId = Number(params.id);
  const { data: dataUser } = useGetUserQuery();
  const { data: dataPost } = useGetPostByIdQuery(postId);
  const { data: dataMessages } = useGetMessagesByPostIdQuery(postId, { refetchOnMountOrArgChange: true });
  const [getPostEmoji] = usePostEmojiMutation();
  const [mainMessage, setMainMessage] = useState<TMainMessage>({ id: 0, login: '' });

  const handleAddEmoji = async ({ messageId, authorId, emojiId }: THandleAddEmoji) => {
    try {
      if (dataUser && dataUser?.id !== authorId) {
        await getPostEmoji({ postId, messageId, authorId: dataUser.id, emojiId }).unwrap();
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

  return (
    <PageContainer>
      <Component>
        <Title>Forum</Title>
        <TitlePost>
          <IconPost />
          <NamePost>{dataPost && dataPost.text}</NamePost>
        </TitlePost>
        <Main>
          {' '}
          {dataMessages &&
            dataMessages.map(item => (
              <MessageElement {...item} key={item.id} addEmoji={handleAddEmoji} addMainMessage={handleAddMainMessage} />
            ))}
        </Main>
        <Footer>
          <MessageInput mainMessage={mainMessage} resetMainMessage={handleResetMainMessage} />
          <Link to={forum.index} variant="size30">
            Back to posts
          </Link>
        </Footer>
      </Component>
    </PageContainer>
  );
};

export default ForumPost;
