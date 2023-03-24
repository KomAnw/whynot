import styled from 'styled-components';
import EmojiBox from 'pages/Forum/pages/FormPost/components/MessageElement/EmojiBox';
import { TMessage, TEmoji } from 'pages/Forum/pages/types';
import MenuEmojis from 'pages/Forum/pages/FormPost/components/MenuEmojis';
import { useState } from 'react';
import { IconButtonEmoji } from 'pages/Forum/components/IconButtonEmoji';
import { Text } from 'src/design/Text';

const MessageElement = ({ author, text, date, messageMainId, emojis }: TMessage) => {
  const [isOpenMenuEmojis, setIsOpenMenuEmojis] = useState(false);

  const handleClick = () => {
    setIsOpenMenuEmojis(!isOpenMenuEmojis);
  };

  const emojiBox = emojis?.map((item: TEmoji, index: number) => (
    <EmojiBox id={item.id} num={10} key={author.id + index} />
  ));

  return (
    <Container elementId={messageMainId!}>
      <Header>
        <Author>
          {author.firstName} {author.secondName}
        </Author>
        <Time>{new Date(date).toLocaleString()}</Time>
      </Header>
      <Message>{text}</Message>
      <Footer>
        {messageMainId === 0 ? <ButtonAnswer>Ответ</ButtonAnswer> : null}
        <ButtonEmoji onClick={handleClick}>
          <IconButtonEmoji />
          {isOpenMenuEmojis && <MenuEmojis setIsOpenMenuEmojis={setIsOpenMenuEmojis} />}
        </ButtonEmoji>
        <Emoji>{emojiBox}</Emoji>
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
  font-weight: 400;
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
