import find from 'find-up';

export const findFile = (fileName: string) => find.sync(fileName);
