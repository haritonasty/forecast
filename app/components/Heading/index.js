/**
 *
 * Heading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colorTheme, fontSize, fontWeight } from '../../utils/style';

const StyledHeading = styled.h2`
  font-family: inherit;
  font-weight: ${fontWeight.big};
  text-align: center;
  text-transform: uppercase;
  font-size: ${fontSize.big}px;
  width: 100%;
  color: ${colorTheme.primary};
`;

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

Heading.propTypes = {
  children: PropTypes.string,
};

export default Heading;
