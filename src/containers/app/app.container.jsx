import React, { useEffect, Suspense, lazy } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { setDimensions } from 'redux/dimensions/dimensions.actions';

import { Route } from 'react-router-dom';
import { debounce } from 'lodash-es';

import Header from 'components/header/header.component';
import ErrorMessage from 'components/error-message/error-message.component';
import Loader from 'components/loader/loader.component';

import { Wrapper, HeaderContainer, StyledPaper } from './app.styles';

/* -------------------------------------------------------------------------- */

const SelectForm = lazy(() => import('components/select-form/select-form.component'));
const CurrentWeather = lazy(() =>
  import(/* webpackPrefetch: true */ 'components/current-weather/current-weather.component'),
);

const App = ({ setDimensions }) => {
  useEffect(() => {
    const handleResize = debounce(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setDimensions]);

  return (
    <>
      <Wrapper>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <StyledPaper>
          <Suspense fallback={<Loader />}>
            <Route exact path="/" component={SelectForm} />
            <Route path="/current" component={CurrentWeather} />
          </Suspense>
        </StyledPaper>

        <ErrorMessage />
      </Wrapper>
    </>
  );
};

/* -------------------------------------------------------------------------- */

App.propTypes = {
  setDimensions: PropTypes.func,
};

export default connect(null, { setDimensions })(App);
