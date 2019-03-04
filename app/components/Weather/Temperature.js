import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize } from '../../utils/style';

export const StyledTemperature = styled.span`
  margin: 0;
  width: 85px;
  text-align: right;
  font-size: ${fontSize.large}px;
  font-family: inherit;
  transition: all 0.3s;
`;

const Temperature = ({ children }) => (
  <StyledTemperature>{children}°</StyledTemperature>
);

Temperature.propTypes = {
  children: PropTypes.number,
};

export default Temperature;
