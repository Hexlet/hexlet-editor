import React, { useRef, useMemo } from 'react';
import MonacoEditor from 'react-monaco-editor';

import { useEditor } from './hooks.js';

export const Editor = () => {
  const monaco = useRef();
  const {
    code,
    language,
    onChange,
    editorDidMount,
    options,
  } = useEditor();
  useMemo(() => {
    if (monaco.current) {
      monaco.current.editor.getModel().updateOptions(options);
      console.log('Editor -> updateOptions', monaco.current.editor.getModel().getOptions());
    }
  }, [options]);


  return (
    <MonacoEditor
      height="600"
      language={language}
      theme="vs-dark"
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
      ref={monaco}
    />
  );
};
