import { CHANGE_LANGUAGE } from './languages.types';

/* -------------------------------------------------------------------------- */

export const setLanguage = language => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});
