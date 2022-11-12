import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Previewer.module.css";

export function Previewer() {
    const text = useSelector(state.text);

    return (
        <div id="preview" className={styles.editor}>
            <h1>Previewer</h1>
            <p>{text}</p>
        </div>
    );
}
