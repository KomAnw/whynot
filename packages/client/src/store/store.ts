import { configureStore } from '@reduxjs/toolkit';
import { userApi } from 'src/api/user/user';
import { authApi } from 'src/api/auth/auth';
import { oauthApi } from 'src/api/oauth/oauth';
import themeReducer from 'src/hoc/ThemeWrapper/themeSlice';
import modeReducer from 'pages/Game/modeSlice';
import fullscreenReducer from 'pages/Settings/fullscreenSlice';
import gamepadReducer from 'pages/Settings/gamepadSlice';
import { leaderboardApi } from 'src/api/leaderboard/leaderboard';

const store = configureStore({
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
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
