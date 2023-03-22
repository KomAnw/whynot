import iconEmoji1 from 'images/forum/emoji1.png';
import iconEmoji2 from 'images/forum/emoji2.png';
import iconEmoji3 from 'images/forum/emoji3.png';

export const EmojiLinkIcon = (id: number) => {
  switch (id) {
    case 1:
      return iconEmoji1;
    case 2:
      return iconEmoji2;
    case 3:
      return iconEmoji3;
  }
};

export const listEmoji = [1, 2, 3];
