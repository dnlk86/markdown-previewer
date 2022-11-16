import React, { useEffect } from "react";
import { Editor } from "./features/editor/Editor";
import { Previewer } from "./features/previewer/Previewer";
import "./App.css";

function App() {
    useEffect(() => {
        const divider = document.getElementById("divider");
        const leftSide = document.getElementById("editorContainer");
        const rightSide = document.getElementById("previewContainer");

        let x = 0;
        let y = 0;

        let leftWidth = 0;

        const mouseDownHandler = (e) => {
            x = e.clientX;
            y = e.clientY;
            leftWidth = leftSide.getBoundingClientRect().width;

            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        };

        divider.addEventListener("mousedown", mouseDownHandler);

        const mouseMoveHandler = (e) => {
            // How far the mouse has been moved
            const dx = e.clientX - x;
            const dy = e.clientY - y;

            const newLeftWidth =
                ((leftWidth + dx) * 100) /
                divider.parentNode.getBoundingClientRect().width;
            leftSide.style.width = `${newLeftWidth}%`;

            divider.style.cursor = "col-resize";
            document.body.style.cursor = "col-resize";

            leftSide.style.userSelect = "none";
            leftSide.style.pointerEvents = "none";

            rightSide.style.userSelect = "none";
            rightSide.style.pointerEvents = "none";
        };

        const mouseUpHandler = function () {
            divider.style.removeProperty("cursor");
            document.body.style.removeProperty("cursor");

            leftSide.style.removeProperty("user-select");
            leftSide.style.removeProperty("pointer-events");

            rightSide.style.removeProperty("user-select");
            rightSide.style.removeProperty("pointer-events");

            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
        };
    }, []);

    return (
        <div className="App">
            <Editor />
            <div id="divider"></div>
            <Previewer />
            <div id="signatureContainer">
                <a
                    href="https://github.com/dnlk86/markdown-previewer"
                    target={"_blank"}
                >
                    dnlk86
                </a>
            </div>
        </div>
    );
}

export default App;
