import styled from 'styled-components';
import { emojiLinkIcon } from 'pages/Forum/pages/FormPost/utils/emojiLinkIcon';
import { Text } from 'src/design/Text';
import type { TEmoji } from 'src/api/forum/messages/models';

const EmojiBox = ({ id, authorId }: TEmoji) => {
  return (
    <Container>
      <Emoji src={`${emojiLinkIcon(id)}`} />
      <Number>{authorId.length}</Number>
    </Container>
  );
};

export default EmojiBox;

const Container = styled('div')`
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.core.text.primary};
  border-radius: 5px;
  padding: 0 5px;
`;

const Emoji = styled('img')`
  width: 18px;
  height: 18px;
`;

const Number = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;
