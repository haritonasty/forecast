/**
 *
 * Country
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colorTheme, fontSize, fontWeight } from '../../utils/style';

export const StyledCountry = styled.button`
  padding: 3px 5px;
  font-family: inherit;
  font-weight: ${fontWeight.default};
  font-size: ${fontSize.medium}px;
  border-bottom: 2px solid
    ${p => (p.open ? colorTheme.base : colorTheme.primary)};
  margin: 4px 0;
  color: ${colorTheme.primary};
  cursor: pointer;
  outline-color: ${colorTheme.primary};
`;

function Country({ value, children, toggleItem, isOpen }) {
  return (
    <>
      <StyledCountry
        onClick={toggleItem}
        open={isOpen}
        title={isOpen ? 'Hide cities' : 'Show cities'}
      >
        {value}
      </StyledCountry>
      {isOpen && children}
    </>
  );
}

Country.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Country;
