import type { Message } from '../../models/message';

export function sortMessage(messages: Message[]) {
  const arrMessageSort: Message[] = [];

  const filterList = (messages: Message[], id: number | null | undefined) => {
    let sortId: number;

    if (id === 0 || id === null || id === undefined) {
      sortId = 0;
    } else {
      sortId = id;
    }

    return messages.filter((item: Message) => item.mainMessageId === sortId);
  };

  const sortTime = (messages: Message[]) => {
    return messages.sort((a: Message, b: Message): number => {
      const timeA = new Date(a.date);
      const timeB = new Date(b.date);

      if (timeA > timeB) return 1;
      if (timeA < timeB) return -1;

      return 0;
    });
  };

  sortTime(filterList(messages, 0)).forEach((item: Message) =>
    arrMessageSort.push(item, ...sortTime(filterList(messages, item.id)))
  );

  return arrMessageSort;
}
