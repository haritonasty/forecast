/**
 *
 * WeatherContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import Weather from '../../components/Weather';
import WeatherInfo from '../../components/WeatherInfo';
import makeSelectWeather from './selectors';
import reducer from './reducer';
import saga from './saga';

const StyledWeather = styled(Weather)``;

const Wrapper = styled.div`
  width: 100%;
  ${StyledWeather} {
    margin: 0 0 100px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class WeatherContainer extends React.PureComponent {
  render() {
    const { city, temp, info, isLoading } = this.props.weather;
    return (
      <Wrapper>
        <StyledWeather city={city} temp={temp} isLoading={isLoading} />
        <WeatherInfo info={info} />
      </Wrapper>
    );
  }
}

WeatherContainer.propTypes = {
  weather: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  weather: makeSelectWeather(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'weather', reducer });
const withSaga = injectSaga({ key: 'weather', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WeatherContainer);
