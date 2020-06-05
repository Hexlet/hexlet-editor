import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../slices/index.js';

const { runCode } = actions;

export const useEditorToolbar = () => {
  const dispatch = useDispatch();
  const { codeExecutionState, code } = useSelector(({ terminal, editor }) => ({
    codeExecutionState: terminal.codeExecutionState,
    code: editor.code,
  }));
  
  const onClick = useCallback(() => dispatch(runCode(code)),
    [dispatch, runCode, code]);
  const disabled = codeExecutionState === 'executing';

  return {
    onClick,
    disabled,
    code,
  };
};
