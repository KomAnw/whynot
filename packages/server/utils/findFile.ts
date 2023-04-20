import findUpSync from 'findup-sync';

export const findFile = (fileName: string) => findUpSync(fileName) || undefined;
