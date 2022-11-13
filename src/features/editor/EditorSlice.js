import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "",
};

export const editorSlice = createSlice({
    name: "editor",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        editText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { editText } = editorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectText = (state) => state.editor.text;

export default editorSlice.reducer;
