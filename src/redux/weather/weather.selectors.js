import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const weatherSelector = state => state.weather;

export const selectWeatherLoading = createSelector([weatherSelector], weather => weather.loading);

export const selectWeatherLoaded = createSelector([weatherSelector], weather => weather.loaded);

export const selectWeatherCurrent = createSelector([weatherSelector], weather => weather.currentWeather);

export const selectWeatherIsError = createSelector([weatherSelector], weather => weather.isError);

export const selectWeatherError = createSelector([weatherSelector], weather => weather.error);
