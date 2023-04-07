/* eslint-disable no-var, vars-on-top */
import type { getUserState } from './index';

type TState = ReturnType<typeof getUserState>;

export {};

declare global {
  var __PRELOADED_STATE__: TState;
}
