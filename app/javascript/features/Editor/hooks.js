import { useDispatch, useSelector } from 'react-redux';

import { updateCode, changeLanguage, setLanguages } from './editorSlice.js';

export const useEditor = () => {
  const dispatch = useDispatch();

  const onChange = (code) => {
    dispatch(updateCode(code));
  };

  const onChangeLanguage = (language) => {
    dispatch(changeLanguage(language));
  };

  const { code, language, languages } = useSelector((state) => state.editor);

  const onMount = (editor, monaco) => {
    const monacoLanguges = monaco.languages.getLanguages();
    const newLanguages = monacoLanguges.map(({ id }) => ({ value: id }));
    dispatch(setLanguages(newLanguages));

    window.addEventListener('resize', () => {
      if (editor) {
        editor.layout();
      }
    });
    editor.focus();
  };

  return {
    code,
    language,
    languages,
    onChange,
    onChangeLanguage,
    editorDidMount: onMount,
  };
};
