import { configureStore } from '@reduxjs/toolkit';
import selectedPictureReducer from './slice';

const store = configureStore({
  reducer: {
    selectedPicture: selectedPictureReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
