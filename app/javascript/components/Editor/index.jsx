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
  } = useEditor(monaco);

  useMemo(() => {
    if (monaco.current) {
      monaco.current.editor.getModel().updateOptions(options);
    }
  }, [options]);

  const constructorOptions = {
    selectOnLineNumbers: true,
  };

  return (
    <MonacoEditor
      height="600"
      language={language}
      theme="vs-dark"
      value={code}
      options={constructorOptions}
      onChange={onChange}
      editorDidMount={editorDidMount}
      ref={monaco}
    />
  );
};
