import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editText } from "./EditorSlice";
import styles from "./Editor.module.css";

export function Editor() {
    const dispatch = useDispatch();
    // const [editorText, setEditorText] = useState("");

    return (
        <div className={styles.editorContainer}>
            <h1>Editor</h1>
            <textarea
                id="editor"
                className={styles.editor}
                onChange={(e) => {
                    // setEditorText(e.target.value);   // solution using local state
                    // dispatch(editText(editorText));
                    dispatch(editText(e.target.value));
                }}
            ></textarea>
        </div>
    );
}
