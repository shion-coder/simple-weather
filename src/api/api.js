import axios from 'axios';
import axiosRetry from 'axios-retry';

import { CURRENT_WEATHER_URL, FETCH_TIMEOUT } from 'config/consts';

/* -------------------------------------------------------------------------- */

// Exponential back-off retry delay between requests
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

export const makeWeatherRequest = async id => {
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const { data } = await axios.get(CURRENT_WEATHER_URL, {
    params: {
      APPID: WEATHER_API_KEY,
      units: 'metric',
      id,
    },
    timeout: FETCH_TIMEOUT,
  });

  return data;
};
