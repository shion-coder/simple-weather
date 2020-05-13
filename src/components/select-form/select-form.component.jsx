import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWeatherLoading } from 'redux/weather/weather.selectors';
import { fetchWeather } from 'redux/weather/weather.actions';

import { Formik, Field, Form } from 'formik';

import { Grid } from '@material-ui/core';

import CitySelector from 'components/city-selector/city-selector.component';
import SelectButton from 'components/select-button/select-button.component';
import Loader from 'components/loader/loader.component';

import { StyledFormControl } from './select-form.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  loading: selectWeatherLoading,
});

const SelectForm = ({ loading, fetchWeather, history }) => {
  const handleSubmit = ({ city }) => {
    fetchWeather(city, history);
  };

  return loading ? (
    <Loader />
  ) : (
    <Formik initialValues={{ city: '1581130' }} onSubmit={handleSubmit}>
      <Form>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item>
            <StyledFormControl>
              <Field name="city" component={CitySelector} />
            </StyledFormControl>
          </Grid>
          <Grid item>
            <SelectButton />
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

/* -------------------------------------------------------------------------- */

SelectForm.propTypes = {
  loading: PropTypes.bool,
  fetchWeather: PropTypes.func,
  history: PropTypes.object,
};

export default connect(mapStateToProps, { fetchWeather })(SelectForm);
