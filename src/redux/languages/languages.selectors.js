import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const languagesSelector = state => state.languages;

export const selectLanguage = createSelector([languagesSelector], languages => languages.language);
