export const demoMessage = [
  {
    id: 1,
    data: '2020-01-02T14:22:22.000Z',
    author: { id: 1, first_name: 'Иван', second_name: 'Karlson' },
    post_id: 1,
    message_main_id: 0,
    emoji: [],
    text: 'Если нажать два раза прыжок, то взлетишь',
  },
  {
    id: 2,
    data: '2020-01-02T14:27:55.000Z',
    author: { id: 2, first_name: 'Митя', second_name: 'Ликупер' },
    post_id: 1,
    message_main_id: 1,
    emoji: [{ id: 1, author_id: [1] }],
    text: 'Ты все врешь, я только как не нажимал, не чего не получается',
  },
  {
    id: 3,
    data: '2020-01-02T17:34:04.000Z',
    author: { id: 1, first_name: 'Иван', second_name: 'Karlson' },
    post_id: 1,
    message_main_id: 0,
    emoji: [],
    text: 'Если нажать два раза прыжок, то взлетишь',
  },
  {
    id: 4,
    data: '2020-01-02T20:01:20.000Z',
    author: { id: 1, first_name: 'Ivan', second_name: 'Karlson' },
    post_id: 1,
    message_main_id: 1,
    emoji: [
      { id: 1, authorID: [1, 2] },
      { id: 2, authorID: [1] },
    ],
    text: 'Значит ты рукожоп, у меня все норм',
  },
];

export const demoPost = {
  id: 1,
  data: '2020-01-02T14:22:22.000Z',
  author: { id: 1, first_name: 'Ivan', second_name: 'Karlson' },
  title: 'Это новый лайвхак. Как обойти правила в этой игре, и все выиграть',
};
