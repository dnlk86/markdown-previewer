import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "./EditorSlice";
import styles from "./Editor.module.css";

export function Editor() {
    // const count = useSelector(selectCount);
    // const dispatch = useDispatch();
    // const [incrementAmount, setIncrementAmount] = useState("2");

    // const incrementValue = Number(incrementAmount) || 0;

    const [editorText, setEditorText] = useState("");

    return (
        <textarea
            id="editor"
            className={styles.editor}
            onChange={(e) => setEditorText(e.target.value)}
            value={editorText}
        ></textarea>
        // <div className={styles.editor}>
        //     <div className={styles.row}>
        //         <input
        //             className={styles.textbox}
        //             aria-label="Set increment amount"
        //             value={incrementAmount}
        //             onChange={(e) => setIncrementAmount(e.target.value)}
        //         />
        //         <button
        //             className={styles.button}
        //             onClick={() => dispatch(incrementByAmount(incrementValue))}
        //         >
        //             Add Amount
        //         </button>
        //     </div>
        // </div>
    );
}
