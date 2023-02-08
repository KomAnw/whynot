import { configureStore } from '@reduxjs/toolkit';
import themeReducer from 'src/hoc/ThemeWrapper/themeSlice';
import userReducer from 'src/store/reducers/userSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
