import styled from 'styled-components';
import EmojiBox from 'pages/Forum/pages/FormPost/components/MessageElement/EmojiBox';
import type { TEmoji } from 'src/api/forum/messages/models';
import MenuEmojis from 'pages/Forum/pages/FormPost/components/MenuEmojis';
import { useState } from 'react';
import { IconButtonEmoji } from 'pages/Forum/components/IconButtonEmoji';
import { Text } from 'src/design/Text';
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

const Container = styled('div')<{ elementId: number }>`
  display: grid;
  grid-auto-flow: row;
  padding-left: ${({ elementId }) => elementId && '12px'};
`;

const Header = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  justify-content: start;
  align-items: center;
`;

const Author = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
`;

const Time = styled(Text)`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.tertiary};
`;

const Message = styled(Text)`
  display: grid;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Footer = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  justify-content: start;
  align-items: center;
`;

const ButtonAnswer = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.core.text.sextuple};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const ButtonEmoji = styled('div')`
  cursor: pointer;
  position: relative;
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  path {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
  rect {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
`;

const Emoji = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
`;
