import { configureStore } from '@reduxjs/toolkit';
import { userApi } from 'src/api/user/user';
import { authApi } from 'src/api/auth/auth';
import themeReducer from 'src/hoc/ThemeWrapper/themeSlice';
import mockThemeReducer from 'src/hoc/MockThemeWrapper/mockThemeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    mockTheme: mockThemeReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
