import React, { useEffect, useRef } from "react";
import Codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';


const Editor = () => {
  const editorRef = useRef(null);
  useEffect(() => {
    async function init(){
      const editor = Codemirror.fromTextArea(document.getElementById('realtimeEditor'),{
        mode:{ name :'javascript', json:true},
        theme: 'dracula',
        autoCloseTags:true,
        autoCloseBrackets:true,
        autocorrect:true,
        lineNumbers:true,
      });
    }
    init();
  },[]);

  return <div>
    <textarea id="realtimeEditor"></textarea>
  </div>
  
};

export default Editor;
