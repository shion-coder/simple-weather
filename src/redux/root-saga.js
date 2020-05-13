import { all, call } from 'redux-saga/effects';

import { weatherSaga } from 'redux/weather/weather.sagas';

/* -------------------------------------------------------------------------- */

export const rootSaga = function*() {
  yield all([call(weatherSaga)]);
};
