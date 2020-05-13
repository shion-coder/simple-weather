import { takeLatest, all, call, put, cancelled } from 'redux-saga/effects';

import { CancelToken } from 'axios';

import { makeWeatherRequest } from 'api/api';

import {
  FETCH_WEATHER_TRIGGER,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './weather.types';

/* -------------------------------------------------------------------------- */

const weatherStart = function*({ cityCode, history }) {
  const source = CancelToken.source();

  yield put({ type: FETCH_WEATHER_REQUEST });

  try {
    const data = yield call(makeWeatherRequest, cityCode);

    yield put({ type: FETCH_WEATHER_SUCCESS, payload: data });
    yield call(history.push, '/current');
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      yield put({ type: FETCH_WEATHER_FAILURE, payload: { ...error, message: 'Response Error !' } });
    } else if (error.request) {
      // The request was made but no response was received
      error.code === 'ECONNABORTED'
        ? yield put({ type: FETCH_WEATHER_FAILURE, payload: { ...error, message: 'Network Timeout !' } })
        : yield put({ type: FETCH_WEATHER_FAILURE, payload: { ...error, message: 'Network Error !' } });
    } else {
      // Something happened in setting up the request that triggered an Error
      yield put({ type: FETCH_WEATHER_FAILURE, payload: { ...error, message: 'Error!' } });
    }
  } finally {
    if (yield cancelled()) {
      source.cancel();
    }
  }
};

const getWeatherTrigger = function*() {
  yield takeLatest(FETCH_WEATHER_TRIGGER, weatherStart);
};

/* -------------------------------------------------------------------------- */

export const weatherSaga = function*() {
  yield all([call(getWeatherTrigger)]);
};
