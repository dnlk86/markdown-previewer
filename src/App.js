import React from "react";
import { Editor } from "./features/editor/Editor";
import { Previewer } from "./features/previewer/Previewer";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* <section className="editor"> */}
            <Editor />
            {/* </section> */}
            {/* <section className="previewer"> */}
            <Previewer />
            {/* </section> */}
        </div>
    );
}

export default App;
