/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const defaultLanguage = { value: 'javascript' };

const slice = createSlice({
  name: 'editor',
  initialState: {
    error: false,
    isFetching: false,
    language: defaultLanguage,
    languages: [],
    code: '// happy hacking!',
  },
  reducers: {
    updateCode(state, { payload }) {
      state.code = payload;
    },
    changeLanguage(state, { payload }) {
      state.language = payload;
    },
    setLanguages(state, { payload }) {
      state.languages = payload;
    },
  },
});

export const {
  updateCode,
  changeLanguage,
  setLanguages,
} = slice.actions;

export default slice.reducer;
