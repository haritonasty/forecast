/**
 *
 * Country
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorTheme, fontSize, fontWeight } from '../../utils/style';

const StyledP = styled.p`
  padding: 3px 5px;
  font-family: inherit;
  font-weight: ${fontWeight.default};
  font-size: ${fontSize.medium}px;
  border-bottom: 2px solid ${colorTheme.primary};
  margin: 4px 0;
  color: ${colorTheme.primary};
`;

function Country({ value, children }) {
  return (
    <>
      <StyledP>{value}</StyledP>
      {children}
    </>
  );
}

Country.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Country;
