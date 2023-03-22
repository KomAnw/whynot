import styled, { css } from 'styled-components';
import { H1 } from 'src/design/H1';
import EmojiBox from 'components/Forum/ForumPost/MessageElement/EmojiBox';

// eslint-disable-next-line camelcase
const MessageElement = ({ author, text, data, message_main_id, emoji }: any) => {
  const time = new Date(data);
  const DataAndTime = `${time.getDay()}.${time.getMonth() + 1}.${time.getFullYear()} 
  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  const emojiBox =
    // eslint-disable-next-line max-len
    emoji.length !== 0 &&
    emoji.map((item: any, index: number) => <EmojiBox id={item.id} num={0} key={author.id + index} />);

  return (
    // eslint-disable-next-line camelcase
    <Containers elementId={message_main_id!}>
      <Header>
        <Author>
          {author.first_name} {author.second_name}
        </Author>
        <Time>{DataAndTime}</Time>
      </Header>
      <Message>{text}</Message>
      <Footer>
        {/* eslint-disable-next-line camelcase */}
        {message_main_id === 0 ? <ButtonAnswer>Ответ</ButtonAnswer> : <></>}
        <ButtonEmoji />
        <Emoji>{emojiBox}</Emoji>
      </Footer>
    </Containers>
  );
};

export default MessageElement;

const Containers = styled.div<{ elementId: number }>`
  display: grid;
  grid-auto-flow: row;
  margin: 0;
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
  margin: 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  justify-content: start;
  align-items: center;
`;

const Author = styled(H1)`
  margin: 0;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
`;

const Time = styled(H1)`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.tertiary};
`;

const Message = styled(H1)`
  display: grid;
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Footer = styled.div`
  margin: 0;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  justify-content: start;
  align-items: center;
`;

const ButtonAnswer = styled(H1)`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.core.text.sextuple};
`;

const ButtonEmoji = styled('button')`
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
