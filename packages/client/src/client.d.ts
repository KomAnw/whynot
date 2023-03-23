import type { TPreloadedState } from 'src/store/store';
/**
 * Необходимо расширим глобальный тип Window,
 * чтобы мы могли обращаться к новому глобальному свойству
 * __PRELOADED_STATE__
 */

export {};

declare global {
  interface Window {
    /**
     * В d.ts нам неважно что это за тип,
     * так как он сразу попадает в redux store на клиенте
     */
    __PRELOADED_STATE__?: TPreloadedState;
  }
}
