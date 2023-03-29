import styled from 'styled-components';
import type { TMenuEmojis } from 'pages/Forum/pages/types';
import { emojiLinkIcon, listEmoji } from 'pages/Forum/pages/FormPost/utils/emojiLinkIcon';

const MenuEmojis = ({ setIsOpenMenuEmojis }: TMenuEmojis) => {
  const handleClick = () => {
    setIsOpenMenuEmojis(false);
  };

  return (
    <Container>
      {listEmoji.map((item: number) => (
        <Emoji src={`${emojiLinkIcon(item)}`} key={item} data-id={item} onClick={handleClick} />
      ))}
    </Container>
  );
};

export default MenuEmojis;

const Container = styled('div')`
  display: flex;
  gap: 5px;
  padding: 0 5px;
  align-items: center;
  position: absolute;
  bottom: 18px;
  left: 18px;
  height: 26px;
  width: 74px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.control.input.backgroundSecondary};
`;

const Emoji = styled('img')`
  cursor: pointer;
`;