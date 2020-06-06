import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../slices/index.js';

export const useEditorToolbar = () => {
  const dispatch = useDispatch();

  const { insertSpaces, tabSize } = useSelector((state) => state.editor.options);
  const textInsertSpaces = insertSpaces ? `Spaces: ${tabSize}` : `Tabs: ${tabSize}`;

  const onInsertSpaces = () => {
    dispatch(actions.setInsertSpaces());
  };

  const onSelectSize = (size) => () => {
    dispatch(actions.setTabSize(size));
  };
  return {
    onSelectSize,
    onInsertSpaces,
    textInsertSpaces,
    tabSize,
  };
};
