import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editText } from "./EditorSlice";
import styles from "./Editor.module.css";

const initialMarkup = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export function Editor() {
    const dispatch = useDispatch();

    useEffect(() => {
        document.getElementById("editor").innerHTML = initialMarkup;
        dispatch(editText(initialMarkup));

        // allowing use of tab key in the textarea
        document
            .getElementById("editor")
            .addEventListener("keydown", function (e) {
                if (e.key === "Tab") {
                    e.preventDefault();

                    var start = this.selectionStart;
                    var end = this.selectionEnd;

                    // set textarea value to: text before caret + 2 spaces + text after caret
                    this.value =
                        this.value.substring(0, start) +
                        "  " +
                        this.value.substring(end);

                    // put caret at right position again
                    this.selectionStart = this.selectionEnd = start + 2;
                }
            });
    }, [dispatch]);

    return (
        <div id="editorContainer">
            <h1 className="headers">Editor</h1>
            <textarea
                id="editor"
                className={styles.editor}
                onChange={(e) => {
                    dispatch(editText(e.target.value));
                }}
            ></textarea>
        </div>
    );
}
