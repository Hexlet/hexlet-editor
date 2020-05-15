import React from 'react';
import Select from 'react-select';
import { useEditor } from '../Editor/hooks.js';

export const SelectLanguage = () => {
  const { onChangeLanguage, language, languages } = useEditor();

  const onChange = (value) => {
    onChangeLanguage(value);
  };

  const vdom = (
    <Select className="mb-3" onChange={onChange} value={language} options={languages} />
  );

  return vdom;
};
