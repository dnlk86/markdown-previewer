import React from "react";
import { useSelector } from "react-redux";
import { selectText } from "../editor/EditorSlice";
import styles from "./Previewer.module.css";
import { marked } from "marked";

export function Previewer() {
    const text = useSelector(selectText);

    marked.use({
        breaks: true,
    });

    const html = marked.parse(text);

    return (
        <div id="previewContainer">
            <h1 className="headers">Previewer</h1>
            <div
                id="preview"
                className={styles.previewer}
                dangerouslySetInnerHTML={{ __html: html }}
            ></div>
        </div>
    );
}
