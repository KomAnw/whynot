export const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    const onLoad = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');

        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      } catch (e) {
        console.warn('ServiceWorker registration failed: ', e);
      }
    };

    window.addEventListener('load', onLoad);
  }
};
