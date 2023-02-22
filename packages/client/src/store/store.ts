import { configureStore } from '@reduxjs/toolkit';
import { authApi } from 'src/api/auth/auth';
import { userApi } from 'src/api/user/user';
import themeReducer from 'src/hoc/ThemeWrapper/themeSlice';
import modeReducer from 'pages/Game/modeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    mode: modeReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
