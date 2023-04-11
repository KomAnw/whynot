import { Number, Emoji, Container } from 'src/pages/Forum/pages/ForumPost/components/MessageElement/EmojiBox/style';
import { emojiLinkIcon } from 'pages/Forum/pages/ForumPost/utils/emojiLinkIcon';
import type { TEmoji } from 'src/api/forum/messages/models';

const EmojiBox = ({ id, authorId }: TEmoji) => {
  return (
    <Container>
      <Emoji src={emojiLinkIcon(id)} />
      <Number>{authorId.length}</Number>
    </Container>
  );
};

export default EmojiBox;
