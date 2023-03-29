/* eslint-disable no-var, vars-on-top */
import type { state } from './index';

export {};

declare global {
  var __PRELOADED_STATE__: typeof state;
}
