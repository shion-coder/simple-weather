import { createReducer } from 'redux/create-reducer';

import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  CLEAR_ERROR_MESSAGE,
} from './weather.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  loading: false,
  loaded: false,
  cityCode: '',
  currentWeather: {},
  isError: false,
  error: {},
};

const reducer = {
  [FETCH_WEATHER_REQUEST]: (state, payload) => ({
    ...state,
    loading: true,
    loaded: false,
    cityCode: payload,
    currentWeather: {},
    isError: false,
    error: {},
  }),
  [FETCH_WEATHER_SUCCESS]: (state, payload) => ({ ...state, loading: false, loaded: true, currentWeather: payload }),
  [FETCH_WEATHER_FAILURE]: (state, payload) => ({ ...state, loading: false, isError: true, error: payload }),
  [CLEAR_ERROR_MESSAGE]: state => ({ ...state, isError: false }),
};

export const weatherReducer = createReducer(initialState, reducer);
