import { FETCH_WEATHER_TRIGGER, CLEAR_ERROR_MESSAGE } from './weather.types';

/* -------------------------------------------------------------------------- */

export const fetchWeather = (cityCode, history) => ({
  type: FETCH_WEATHER_TRIGGER,
  cityCode,
  history,
});

export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
