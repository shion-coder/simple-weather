import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWeatherIsError, selectWeatherError } from 'redux/weather/weather.selectors';
import { clearErrorMessage } from 'redux/weather/weather.actions';

import { Snackbar, IconButton } from '@material-ui/core';

import { StyledSnackbarContent, Message, StyledErrorIcon, StyledCloseIcon } from './error-message.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  isError: selectWeatherIsError,
  error: selectWeatherError,
});

const ErrorMessage = ({ isError, error, clearErrorMessage }) => {
  const errorMessage = error.message || 'Something went wrong';

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={isError}
      autoHideDuration={5000}
      onClose={clearErrorMessage}
    >
      <StyledSnackbarContent
        message={
          <Message>
            <StyledErrorIcon />
            {errorMessage}
          </Message>
        }
        action={[
          <IconButton key="close" color="inherit" onClick={clearErrorMessage}>
            <StyledCloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

/* -------------------------------------------------------------------------- */

ErrorMessage.propTypes = {
  isError: PropTypes.bool,
  error: PropTypes.object,
  clearErrorMessage: PropTypes.func,
};

export default connect(mapStateToProps, { clearErrorMessage })(ErrorMessage);
