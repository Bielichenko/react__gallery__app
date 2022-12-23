/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPicture } from '../types/IPicture';

type SelectedPictureState = {
  selectedPicture : IPicture | null;
};

const initialState: SelectedPictureState = {
  selectedPicture: null,
};

export const selectedPictureSlice = createSlice({
  name: 'selectedPicture',
  initialState,
  reducers: {
    setSelectedPicture(state, action: PayloadAction<null | IPicture>) {
      state.selectedPicture = action.payload;
    },
  },
});

export const { setSelectedPicture } = selectedPictureSlice.actions;

export default selectedPictureSlice.reducer;
