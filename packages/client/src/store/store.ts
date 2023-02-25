import { configureStore } from '@reduxjs/toolkit';
import { userApi } from 'src/api/user/user';
import { authApi } from 'src/api/auth/auth';
import themeReducer from 'src/hoc/ThemeWrapper/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
