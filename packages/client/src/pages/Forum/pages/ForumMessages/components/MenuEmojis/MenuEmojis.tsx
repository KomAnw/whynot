import styled from 'styled-components';
import type { TMenuEmojis } from 'pages/Forum/pages/types';
import { EmojiLinkIcon, listEmoji } from 'pages/Forum/pages/ForumMessages/utils/emojiLinkIcon';
import React from 'react';

const MenuEmojis = ({ setIsOpenMenuEmojis }: TMenuEmojis) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const idClickEmoji = (event.target as HTMLButtonElement).getAttribute('data-id');

    // eslint-disable-next-line no-console
    console.log(idClickEmoji);
    setIsOpenMenuEmojis(false);
  };

  return (
    <Container>
      {listEmoji.map((item: number) => (
        <Emogi src={`${EmojiLinkIcon(item)}`} key={item} data-id={item} onClick={handleClick} />
      ))}
    </Container>
  );
};

export default MenuEmojis;

const Container = styled('div')`
  display: grid;
  position: absolute;
  bottom: 18px;
  left: 18px;
  height: 26px;
  width: 74px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.control.input.backgroundSecondary};
  grid-auto-flow: column;
  grid-column-gap: 5px;
  align-items: center;
  justify-items: center;
  padding: 0 5px;
`;

const Emogi = styled('img')`
  cursor: pointer;
  width: 18px;
  height: 18px;
  display: grid;
`;
