import { TMessage } from 'components/Forum/types';
import { demoMessage } from 'components/Forum/ForumPost/demoData';

export function SortMessage(messages: TMessage[]) {
  const arrMessageSort: any = [];

  const filterList = (messages: TMessage[], id: number) =>
    messages.filter((item: TMessage) => item.message_main_id === id);
  const sortTime = (messages: TMessage[]) => {
    return messages.sort((a: TMessage, b: TMessage): number => {
      const timeA = new Date(a.data);
      const timeB = new Date(b.data);

      if (timeA > timeB) return 1;
      if (timeA < timeB) return -1;

      return 0;
    });
  };

  sortTime(filterList(messages, 0)).forEach((item: TMessage) =>
    arrMessageSort.push(item, ...sortTime(filterList(demoMessage, item.id)))
  );

  return arrMessageSort;
}
