/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'editorToolbar',
  initialState: {
    error: false,
    isFetching: false,
    language: 'javascript',
    code: '// happy hacking!\n',
    options: {
      selectOnLineNumbers: true,
      tabSize: 8,
    },
  },
  reducers: {
    updateCode(state, { payload }) {
      state.code = payload;
    },
    changeLanguage(state, { payload }) {
      state.language = payload;
    },
    setTabSize(state, { payload }) {
      state.options.tabSize = payload;
      state.options.selectOnLineNumbers = !state.options.selectOnLineNumbers;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
