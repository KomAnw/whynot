import { configureStore } from '@reduxjs/toolkit';
import { userApi } from 'src/api/user/user';
import { authApi } from 'src/api/auth/auth';
import { oauthApi } from 'src/api/oauth/oauth';
import { postsApi } from 'src/api/forum/posts/posts';
import themeReducer from 'src/hoc/ThemeWrapper/themeSlice';
import { leaderboardApi } from 'src/api/leaderboard/leaderboard';
import modeReducer from 'pages/Game/modeSlice';
import fullscreenReducer from 'pages/Settings/fullscreenSlice';
import gamepadReducer from 'pages/Settings/gamepadSlice';
import soundReducer from 'pages/Settings/soundSlice';

const preloadedState = globalThis.__PRELOADED_STATE__;

const store = configureStore({
  reducer: {
    theme: themeReducer,
    mode: modeReducer,
    fullscreen: fullscreenReducer,
    gamepad: gamepadReducer,
    sound: soundReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [oauthApi.reducerPath]: oauthApi.reducer,
    [leaderboardApi.reducerPath]: leaderboardApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      leaderboardApi.middleware,
      authApi.middleware,
      userApi.middleware,
      oauthApi.middleware,
      postsApi.middleware
    ),
  preloadedState,
});

delete globalThis.__PRELOADED_STATE__;

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
