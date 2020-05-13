import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWeatherLoaded, selectWeatherCurrent } from 'redux/weather/weather.selectors';

import { useTranslation } from 'react-i18next';
import format from 'date-fns/format';

import { CardContent } from '@material-ui/core';

import { Container, StyledCard, StyledCardHeader, Content } from './current-weather.styles';

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  loaded: selectWeatherLoaded,
  currentWeather: selectWeatherCurrent,
});

const CurrentWeather = ({ loaded, currentWeather, history }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!loaded) {
      history.replace('/');
    }
  }, [loaded, history]);

  const city = currentWeather.name ?? '';
  const lastUpdated = currentWeather?.dt ?? '';
  const temperature = currentWeather.main?.temp ?? '';
  const wind = currentWeather.wind?.speed ?? '';
  const humidity = currentWeather.main?.humidity ?? '';
  const icon = currentWeather.weather?.[0]?.icon ?? '';
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : '';

  return (
    <Container>
      <StyledCard>
        <StyledCardHeader
          title={t(city)}
          subheader={`${t('last-updated')}: ${format(lastUpdated * 1000, 'dd.MM.yyyy HH:mm')}`}
          avatar={<img src={iconUrl} alt="icon" />}
        />
        <CardContent>
          <Content>
            <div>{`${t('temp')}: ${temperature} ${'\u2103'} `}</div>
            <div>{`${t('wind')}: ${wind} Kph `}</div>
            <div>{`${t('humidity')}: ${humidity} % `}</div>
          </Content>
        </CardContent>
      </StyledCard>
    </Container>
  );
};
/* -------------------------------------------------------------------------- */

CurrentWeather.propTypes = {
  loaded: PropTypes.bool,
  currentWeather: PropTypes.object,
  history: PropTypes.object,
};

export default connect(mapStateToProps)(CurrentWeather);
