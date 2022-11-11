import { configureStore } from '@reduxjs/toolkit';
import editorReducer from '../features/editor/EditorSlice';

export const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
});
