/**
 *
 * Weather
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSize } from '../../utils/style';

import Loader from '../Loader';

const Temperature = styled.span`
  margin: 0;
  width: 85px;
  text-align: right;
  font-size: ${fontSize.large}px;
  font-family: inherit;
  transition: all 0.3s;
`;

const City = styled.span`
  font-size: ${fontSize.big}px;
`;

const StyledLoader = styled(Loader)`
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  display: ${p => (p.show ? 'flex' : 'none')};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: relative;
`;

function Weather({ city, temp, className, isLoading }) {
  return (
    <Wrapper className={className}>
      {temp !== undefined &&
        temp !== null && <Temperature>{temp}°</Temperature>}
      <City>{city}</City>
      <StyledLoader show={isLoading} />
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
