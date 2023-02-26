export const startServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    const onLoad = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');

        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      } catch (error) {
        console.warn('ServiceWorker registration failed: ', error);
      }
    };

    window.addEventListener('load', onLoad);
  }
};
