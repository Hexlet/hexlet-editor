import React from 'react';
import Select from 'react-select';
import { useEditor } from '../Editor/hooks.js';

export const SelectLanguage = () => {
  const { onChangeLanguage, language, languages } = useEditor();

  const onChange = (value) => {
    onChangeLanguage(value);
  };

  const getOptionLabel = ({ value }) => value;

  const vdom = (
    <div className="d-flex flex-column justify-center align-items-center">
      <h5 className="font-italic font-weight-lighter">Choose language</h5>
      <Select className="mb-3 w-100" getOptionLabel={getOptionLabel} onChange={onChange} value={language} options={languages} />
    </div>
  );

  return vdom;
};
