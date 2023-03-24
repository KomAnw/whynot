import type { TPreloadedState } from 'src/store/store';

export {};

declare global {
  var __PRELOADED_STATE__: TPreloadedState;
}
