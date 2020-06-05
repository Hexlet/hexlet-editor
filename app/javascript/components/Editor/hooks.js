import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../slices';

export const useEditor = () => {
  const dispatch = useDispatch();

  const onChange = (code) => {
    dispatch(actions.updateCode(code));
  };

  const { code, language, options } = useSelector((state) => ({
    code: state.editor.code,
    language: state.editor.language,
    options: state.editor.options,
  }));

  const onMount = (editor) => {
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
    onChange,
    editorDidMount: onMount,
    options,
  };
};
