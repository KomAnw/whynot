import { configureStore } from '@reduxjs/toolkit';
import { userApi } from 'src/api/user/user';
import { authApi } from 'src/api/auth/auth';
import { oauthApi } from 'src/api/oauth/oauth';
import themeReducer from 'src/hoc/ThemeWrapper/themeSlice';
import modeReducer from 'pages/Game/modeSlice';
import fullscreenReducer from 'pages/Settings/fullscreenSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    mode: modeReducer,
    fullscreen: fullscreenReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [oauthApi.reducerPath]: oauthApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware, oauthApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
