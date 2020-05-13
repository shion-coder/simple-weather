import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLanguage } from 'redux/languages/languages.selectors';
import { setLanguage } from 'redux/languages/languages.actions';

import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AppBar, Toolbar, IconButton, FormControlLabel, Radio } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { Title, StyledFormControl, StyledRadioGroup } from './header.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  language: selectLanguage,
});

const Header = ({ language, setLanguage }) => {
  const history = useHistory();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const disabled = location.pathname === '/';

  const handleChange = event => {
    const language = event.target.value;
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton disabled={disabled} onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>

        <Title>{t('app-title')}</Title>

        <StyledFormControl component="fieldset">
          <StyledRadioGroup name="language" value={language} onChange={handleChange}>
            <FormControlLabel value="en" control={<Radio color="default" />} label="EN" />
            <FormControlLabel value="vi" control={<Radio color="default" />} label="VI" />
          </StyledRadioGroup>
        </StyledFormControl>
      </Toolbar>
    </AppBar>
  );
};

/* -------------------------------------------------------------------------- */

Header.propTypes = {
  language: PropTypes.string,
  setLanguage: PropTypes.func,
};

export default connect(mapStateToProps, { setLanguage })(Header);
