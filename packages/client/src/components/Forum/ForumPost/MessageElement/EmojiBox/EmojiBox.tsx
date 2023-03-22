import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import iconEmoji1 from 'images/forum/emoji1.png';
import iconEmoji2 from 'images/forum/emoji2.png';
import iconEmoji3 from 'images/forum/emoji3.png';

const emojiIcon = (id: number) => {
  switch (id) {
    case 1:
      return iconEmoji1;
    case 2:
      return iconEmoji2;
    case 3:
      return iconEmoji3;
  }
};
const EmojiBox = ({ id = 1, num = 1 }) => {
  return (
    <Containers>
      <Emogi src={`${emojiIcon(id)}`} />
      <Number>{num}</Number>
    </Containers>
  );
};

export default EmojiBox;

const Containers = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  margin: 0;
  border: 1px solid #6457b8;
  border-radius: 5px;
  padding: 0 5px;
  align-items: center;
`;

const Emogi = styled.img`
  width: 18px;
  height: 18px;
  display: grid;
  grid-template-rows: auto auto;
  margin: 0;
`;

const Number = styled(H1)`
  display: grid;
  grid-template-rows: auto auto;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.septenary};
`;
