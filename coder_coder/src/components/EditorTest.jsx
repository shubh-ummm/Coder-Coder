import React, { useEffect } from "react";
import CodeMirror from "codemirror";
import 'codemirror/lib/codemirror.css'
import "codemirror/mode/python/python";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

const EditorTest = () => {
  useEffect(() => {
    async function init() {
      CodeMirror.fromTextArea(document.getElementById("realtimeEditorTest"), {
        mode: { name: "javascript", json: true },
        theme: "dracula",
        // autoCloseTags: true,
        // autoCloseBrackets: true,
        lineNumbers:true,
      });
    }
    init();
  }, []);
  return <textarea id="realtimeEditorTest"></textarea>;
};

export default EditorTest;
