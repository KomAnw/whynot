import styled, { css } from 'styled-components';
import React from 'react';
import { H1 } from 'src/design/H1';
import EmojiBox from 'components/Forum/ForumPost/MessageElement/EmojiBox';
import { TMessage, TEmoji } from 'components/Forum/types';
import MenuEmojis from 'components/Forum/ForumPost/MenuEmojis';
import { useState } from 'react';
import { TimeFormatting } from 'components/Forum/ForumPost/utils/TimeFormatting';

// eslint-disable-next-line camelcase
const MessageElement = ({ author, text, data, message_main_id, emojis }: TMessage) => {
  const [isOpenMenuEmojis, setIsOpenMenuEmojis] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsOpenMenuEmojis(!isOpenMenuEmojis);
  };

  const emojiBox =
    emojis.length !== 0 &&
    emojis.map((item: TEmoji, index: number) => <EmojiBox id={item.id} num={0} key={author.id + index} />);

  return (
    // eslint-disable-next-line camelcase
    <Containers elementId={message_main_id!}>
      <Header>
        <Author>
          {author.first_name} {author.second_name}
        </Author>
        <Time>{TimeFormatting(data)}</Time>
      </Header>
      <Message>{text}</Message>
      <Footer>
        {/* eslint-disable-next-line camelcase */}
        {message_main_id === 0 ? <ButtonAnswer>Ответ</ButtonAnswer> : <></>}
        <ButtonEmoji onClick={handleClick}>
          <MenuEmojis isOpenMenuEmojis={isOpenMenuEmojis} setIsOpenMenuEmojis={setIsOpenMenuEmojis} />
        </ButtonEmoji>
        <Emoji>{emojiBox}</Emoji>
      </Footer>
    </Containers>
  );
};

export default MessageElement;

const Containers = styled.div<{ elementId: number }>`
  display: grid;
  grid-auto-flow: row;
  ${({ elementId }) =>
    elementId === 0
      ? css`
          padding-left: 0;
        `
      : css`
          padding-left: 12px;
        `}
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  justify-content: start;
  align-items: center;
`;

const Author = styled(H1)`
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
`;

const Time = styled(H1)`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.tertiary};
`;

const Message = styled(H1)`
  display: grid;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Footer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  justify-content: start;
  align-items: center;
`;

const ButtonAnswer = styled(H1)`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.core.text.sextuple};
`;

const ButtonEmoji = styled.div`
  cursor: pointer;
  position: relative;
  border: 0;
  width: 18px;
  height: 18px;
  background: url(/images/forum/icon1.svg) no-repeat;
  background-size: cover;
`;

const Emoji = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
`;
