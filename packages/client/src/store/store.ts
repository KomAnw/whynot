import { configureStore } from '@reduxjs/toolkit';
import themeReducer from 'src/hoc/ThemeWrapper/themeSlice';
import { authApi } from 'src/api/authAPI';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
