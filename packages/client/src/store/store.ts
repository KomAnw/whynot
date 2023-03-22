import { configureStore } from '@reduxjs/toolkit';
import type { TSprite } from '../../src/pages/Game/types/types';
import type { Theme } from '../../src/hoc/ThemeWrapper/types';
import { userApi } from '../../src/api/user/user';
import { authApi } from '../../src/api/auth/auth';
import { oauthApi } from '../../src/api/oauth/oauth';
import themeReducer from '../../src/hoc/ThemeWrapper/themeSlice';
import modeReducer from '../pages/Game/modeSlice';
import fullscreenReducer from '../pages/Settings/fullscreenSlice';
import gamepadReducer from '../pages/Settings/gamepadSlice';
import { leaderboardApi } from '../../src/api/leaderboard/leaderboard';

export type TPreloadedState = { theme: Theme; mode: { sprite: TSprite } };

/**
 * Функция createStore для SSR.
 * Использует preloadedState в качестве значений по умолчанию.
 *
 * @param preloadedState состояния по умолчанию для theme и mode.
 */
export default function createStore(preloadedState?: TPreloadedState) {
  return configureStore({
    reducer: {
      theme: themeReducer,
      mode: modeReducer,
      fullscreen: fullscreenReducer,
      gamepad: gamepadReducer,
      [authApi.reducerPath]: authApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [oauthApi.reducerPath]: oauthApi.reducer,
      [leaderboardApi.reducerPath]: leaderboardApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        leaderboardApi.middleware,
        authApi.middleware,
        userApi.middleware,
        oauthApi.middleware
      ),
    preloadedState,
  });
}

export type CreateStore = typeof createStore;
export type Store = ReturnType<CreateStore>;

export type RootState = ReturnType<Store['getState']>;

export type AppDispatch = Store['dispatch'];
