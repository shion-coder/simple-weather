import { createReducer } from 'redux/create-reducer';

import { CHANGE_LANGUAGE } from './languages.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  language: 'en',
};

const reducer = {
  [CHANGE_LANGUAGE]: (state, payload) => ({ ...state, language: payload }),
};

export const languagesReducer = createReducer(initialState, reducer);
