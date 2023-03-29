const iconEmoji1 = '/images/forum/emoji1.png';
const iconEmoji2 = '/images/forum/emoji2.png';
const iconEmoji3 = '/images/forum/emoji3.png';

export const emojiLinkIcon = (id: number) => {
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
