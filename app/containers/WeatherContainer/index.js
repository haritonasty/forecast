/**
 *
 * WeatherContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Weather from '../../components/Weather';
import WeatherInfo from '../../components/WeatherInfo';

import saga from './saga';
import reducer from './reducer';
import makeSelectWeather from './selectors';

const StyledWeather = styled(Weather)``;

const Wrapper = styled.div`
  width: 100%;
  ${StyledWeather} {
    margin: 0 0 100px;
  }
`;

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
