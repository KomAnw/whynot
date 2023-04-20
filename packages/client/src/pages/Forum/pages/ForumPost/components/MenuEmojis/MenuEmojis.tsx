import { Emoji, Container } from 'src/pages/Forum/pages/ForumPost/components/MenuEmojis/style';
import type { MouseEvent } from 'react';
import type { TMenuEmojis } from 'pages/Forum/pages/types';
import { emojiLinkIcon, listEmoji } from 'pages/Forum/pages/ForumPost/utils/emojiLinkIcon';

const MenuEmojis = ({ setIsOpenMenuEmojis, messageId, authorId, addEmoji }: TMenuEmojis) => {
  const handleClick = async (event: MouseEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;

    addEmoji({ messageId, authorId, emojiId: Number(target.dataset.id) });
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
