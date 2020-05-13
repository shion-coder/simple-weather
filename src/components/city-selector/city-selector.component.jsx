import React from 'react';

import { useTranslation } from 'react-i18next';

import cities from 'config/cities';

import { MenuItem } from '@material-ui/core';

import { StyledSelect } from './city-selector.styles';

/* -------------------------------------------------------------------------- */

const CitySelector = ({ field }) => {
  const { t } = useTranslation();

  const renderItem = Object.entries(cities).map(([code, name]) => (
    <MenuItem key={code} value={code}>
      {t(name)}
    </MenuItem>
  ));

  return <StyledSelect {...field}>{renderItem}</StyledSelect>;
};

/* -------------------------------------------------------------------------- */

export default CitySelector;
