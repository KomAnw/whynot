/* eslint-disable no-console */
type TLoggerType = 'default' | 'error' | 'warn' | 'info';

export const logger = (value: unknown, type: TLoggerType = 'default') => {
  switch (type) {
    case 'info':
      console.info(`Info: ${value}`);
      break;
    case 'warn':
      console.warn(`Warn: ${value}`);
      break;
    case 'error':
      console.error(`Error: ${value}`);
      break;
    default:
      console.log(value);
  }
};
