/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'editor',
  initialState: {
    error: false,
    isFetching: false,
    language: 'javascript',
    code: '// happy hacking!\n',
    options: {
      insertSpaces: true,
      tabSize: 4,
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
    },
    setInsertSpaces(state) {
      state.options.insertSpaces = !state.options.insertSpaces;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
