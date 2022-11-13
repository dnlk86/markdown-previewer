import React from "react";
import { useSelector } from "react-redux";
import { selectText } from "../editor/EditorSlice";
import styles from "./Previewer.module.css";

export function Previewer() {
    const text = useSelector(selectText);

    return (
        <div id="preview" className={styles.previewer}>
            <h1>Previewer</h1>
            <p>{text}</p>
        </div>
    );
}
