import { logger } from 'src/utils/logger';

export const startServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    const onLoad = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');

        logger(`ServiceWorker registration successful with scope: ${registration.scope}`);
      } catch (error) {
        logger(`ServiceWorker registration failed:  ${error}`, 'warn');
      }
    };

    window.addEventListener('load', onLoad);
  }
};
