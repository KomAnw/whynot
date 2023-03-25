import type { TMessage } from 'pages/Forum/pages/types';

export function sortMessage(messages: TMessage[]) {
  const arrMessageSort: TMessage[] = [];

  const filterList = (messages: TMessage[], id: number) =>
    messages.filter((item: TMessage) => item.messageMainId === id);
  const sortTime = (messages: TMessage[]) => {
    return messages.sort((a: TMessage, b: TMessage): number => {
      const timeA = new Date(a.date);
      const timeB = new Date(b.date);

      if (timeA > timeB) return 1;
      if (timeA < timeB) return -1;

      return 0;
    });
  };

  sortTime(filterList(messages, 0)).forEach((item: TMessage) =>
    arrMessageSort.push(item, ...sortTime(filterList(messages, item.id)))
  );

  return arrMessageSort;
}
