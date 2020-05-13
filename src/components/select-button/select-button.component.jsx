import React from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@material-ui/core';
import Send from '@material-ui/icons/Send';

/* -------------------------------------------------------------------------- */

const SelectButton = () => {
  const { t } = useTranslation();

  return (
    <Button type="submit" variant="outlined" color="primary" startIcon={<Send />}>
      {t('get-weather')}
    </Button>
  );
};

/* -------------------------------------------------------------------------- */

export default SelectButton;
