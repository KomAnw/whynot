import styled, { css } from 'styled-components';
import { TMenuEmojis } from 'components/Forum/types';
import { EmojiLinkIcon, listEmoji } from 'components/Forum/ForumPost/utils/EmojiLinkIcon';
import React from 'react';

const MenuEmojis = ({ isOpenMenuEmojis, setIsOpenMenuEmojis }: TMenuEmojis) => {
  const handleClick = (event: React.MouseEvent) => {
    const idClickEmoji = (event.target as HTMLButtonElement).getAttribute('data-id');

    // eslint-disable-next-line no-console
    console.log(idClickEmoji);
    setIsOpenMenuEmojis(false);
  };

  return (
    <Containers isOpen={isOpenMenuEmojis}>
      {listEmoji.map((item: number) => (
        <Emogi src={`${EmojiLinkIcon(item)}`} key={item} data-id={item} onClick={handleClick} />
      ))}
    </Containers>
  );
};

export default MenuEmojis;

const Containers = styled.div<{ isOpen: boolean }>`
  position: absolute;
  bottom: 18px;
  left: 18px;
  height: 26px;
  width: 74px;
  border-radius: 6px;
  background: #abcdce;
  ${({ isOpen }) =>
    isOpen === true
      ? css`
          display: grid;
          grid-auto-flow: column;
          grid-column-gap: 5px;
          align-items: center;
          justify-items: center;
          padding: 0 5px;
        `
      : css`
          display: none;
        `}
`;

const Emogi = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
  display: grid;
`;
