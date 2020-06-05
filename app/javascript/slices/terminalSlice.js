/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const runCode = createAsyncThunk(
  'terminal/runCode',
  async (code) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        let result;

        try {
          // eslint-disable-next-line no-eval
          result = eval(code);
        } catch (err) {
          result = err.toString();
        }

        resolve(result);
      }, 1000);
    });
    return response;
  },
  {
    condition: (code, { getState }) => {
      const { terminal: { codeExecutionState } } = getState();
      return codeExecutionState !== 'executing';
    },
  },
);

const slice = createSlice({
  name: 'terminal',
  initialState: {
    codeExecutionState: 'idle',
    output: '',
  },
  reducers: {
  },
  extraReducers: {
    [runCode.pending]: (state) => {
      state.codeExecutionState = 'executing';
    },
    [runCode.fulfilled]: (state, { payload }) => {
      state.codeExecutionState = 'idle';
      state.output = payload;
    },
    [runCode.rejected]: (state, { payload }) => {
      state.output = payload;
      state.codeExecutionState = 'idle';
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
