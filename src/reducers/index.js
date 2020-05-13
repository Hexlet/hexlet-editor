import { combineReducers } from '@reduxjs/toolkit';

import editorReducer from 'features/Editor/editorSlice';


export const rootReducer = combineReducers({
  editor: editorReducer,
});
