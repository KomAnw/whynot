import {
  Author,
  Time,
  Header,
  Message,
  Emoji,
  ButtonEmoji,
  ButtonAnswer,
  Container,
  Footer,
} from 'src/pages/Forum/pages/ForumPost/components/MessageElement/style';
import EmojiBox from 'pages/Forum/pages/ForumPost/components/MessageElement/EmojiBox';
import type { TEmoji } from 'src/api/forum/messages/models';
import MenuEmojis from 'pages/Forum/pages/ForumPost/components/MenuEmojis';
import { useState } from 'react';
import { IconButtonEmoji } from 'pages/Forum/components/IconButtonEmoji';
import type { TMessageProps } from 'pages/Forum/pages/types';

const MessageElement = (props: TMessageProps) => {
  const { id, authorId, text, login, date, mainMessageId, emojis, addEmoji, addMainMessage } = props;
  const [isOpenMenuEmojis, setIsOpenMenuEmojis] = useState(false);

  const handleClickButtonEmoji = () => {
    setIsOpenMenuEmojis(!isOpenMenuEmojis);
  };

  const handleClickButtonAnswer = () => {
    addMainMessage({ id, login });
  };

  return (
    <Container elementId={mainMessageId!}>
      <Header>
        <Author>{login}</Author>
        <Time>{new Date(date).toLocaleString()}</Time>
      </Header>
      <Message>{text}</Message>
      <Footer>
        {mainMessageId === 0 ? <ButtonAnswer onClick={handleClickButtonAnswer}>Ответ</ButtonAnswer> : null}
        <ButtonEmoji onClick={handleClickButtonEmoji}>
          <IconButtonEmoji />
          {isOpenMenuEmojis && (
            <MenuEmojis
              messageId={id}
              authorId={authorId}
              setIsOpenMenuEmojis={setIsOpenMenuEmojis}
              addEmoji={addEmoji}
            />
          )}
        </ButtonEmoji>
        <Emoji>{emojis && emojis.map((item: TEmoji) => <EmojiBox {...item} key={item.id} />)}</Emoji>
      </Footer>
    </Container>
  );
};

export default MessageElement;
