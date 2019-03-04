/**
 *
 * City
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colorTheme, fontSize } from '../../utils/style';

export const StyledCity = styled.span`
  display: block;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: ${fontSize.small}px;
  padding: 5px 10px;
`;

export const DeleteButton = styled.span`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Wrapper = styled.button`
  outline-color: ${colorTheme.primary};
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.3s;
  border-radius: 2px;
  background-color: ${p => (p.curr ? colorTheme.primary : colorTheme.base)};
  color: ${p => (p.curr ? colorTheme.base : colorTheme.baseInvert)};
  &:hover {
    background-color: ${p => (p.curr ? colorTheme.primary : colorTheme.border)};
  }

  &:hover,
  &:focus ${StyledCity} {
    color: ${p => (p.curr ? colorTheme.base : colorTheme.primary)};
  }
  ${DeleteButton} {
    visibility: hidden;
  }
  &:hover ${DeleteButton} {
    visibility: visible;
  }
`;

function City({ value, onChangeCity, onRemoveCity, isCurrent }) {
  return (
    <Wrapper curr={isCurrent}>
      <StyledCity onClick={onChangeCity} title="Show weather">
        {value}
      </StyledCity>
      {!isCurrent && (
        <DeleteButton onClick={onRemoveCity} title="Delete city">
          &#10005;
        </DeleteButton>
      )}
    </Wrapper>
  );
}

City.propTypes = {
  value: PropTypes.string,
  isCurrent: PropTypes.bool,
  onChangeCity: PropTypes.func,
  onRemoveCity: PropTypes.func,
};

export default City;
