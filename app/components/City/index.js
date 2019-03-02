/**
 *
 * City
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colorTheme, fontSize } from '../../utils/style';

const StyledCity = styled.button`
  display: block;
  width: 100%;
  margin: 5px 0 5px 10px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: ${fontSize.small}px;
  outline: none;
`;
const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.3s;
  border-radius: 2px;
  background-color: ${props =>
    props.current ? colorTheme.primary : colorTheme.base};
  color: ${props => (props.current ? colorTheme.base : colorTheme.baseInvert)};
  &:hover {
    background-color: ${props =>
      props.current ? colorTheme.primary : colorTheme.border};
  }

  &:hover,
  &:focus ${StyledCity} {
    color: ${props => (props.current ? colorTheme.base : colorTheme.primary)};
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
    <Div current={isCurrent}>
      <StyledCity onClick={onChangeCity} title="Show weather">
        {value}
      </StyledCity>
      {!isCurrent && (
        <DeleteButton onClick={onRemoveCity} title="Delete city">
          &#10005;
        </DeleteButton>
      )}
    </Div>
  );
}

City.propTypes = {
  value: PropTypes.string,
  isCurrent: PropTypes.bool,
  onChangeCity: PropTypes.func,
  onRemoveCity: PropTypes.func,
};

export default City;
