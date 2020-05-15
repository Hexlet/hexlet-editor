import React from 'react';
import MonacoEditor from 'react-monaco-editor';

import { useEditor } from './hooks.js';

export const Editor = () => {
  const {
    code,
    onChange,
    editorDidMount,
    language,
  } = useEditor();

  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <MonacoEditor
      height="600"
      language={language.value}
      theme="vs-dark"
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  );
};
