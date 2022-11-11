import { configureStore } from '@reduxjs/toolkit';
import previewerReducer from '../features/previewer/previewerSlice';

export const store = configureStore({
  reducer: {
    previewer: previewerReducer,
  },
});
