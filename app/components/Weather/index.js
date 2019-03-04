/**
 *
 * Weather
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import City from './City';
import Wrapper from './Wrapper';
import Temperature from './Temperature';
import StyledLoader from './StyledLoader';

function Weather({ city, temp, className, isLoading }) {
  return (
    <Wrapper className={className}>
      {temp !== undefined && temp !== null && <Temperature>{temp}</Temperature>}
      <City>{city}</City>
      {isLoading && <StyledLoader />}
    </Wrapper>
  );
}

Weather.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};

export default Weather;
