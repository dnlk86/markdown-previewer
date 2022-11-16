import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "",
};

export const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        editText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { editText } = editorSlice.actions;

export const selectText = (state) => state.editor.text;

export default editorSlice.reducer;
