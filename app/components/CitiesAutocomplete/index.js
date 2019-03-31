/**
 *
 * CitiesAutocomplete
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlacesAutocomplete from 'react-places-autocomplete';

import { colorTheme, fontSize } from '../../utils/style';

import SearchIcon from '../SearchIcon';

const searchOnlyCities = { types: ['(cities)'] };

export const AutocompleteContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const WrapperIcon = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  left: 20px;
  opacity: 0.8;
`;

export const WrapperInput = styled.div`
  width: 100%;
  position: relative;
  &:hover ${WrapperIcon} {
    opacity: 1;
  }
`;

export const Suggestion = styled.div`
  padding: 8px;
  text-align: left;
  color: ${colorTheme.baseInvert};
  cursor: pointer;
  &:hover {
    color: ${colorTheme.primary};
  }
`;

export const Input = styled.input`
  background: transparent;
  min-height: 50px;
  outline: none;
  border: none;
  border-bottom: 2px solid ${colorTheme.border};
  color: inherit;
  font-size: ${fontSize.medium}px;
  font-family: inherit;
  padding: 0 20px 0 60px;
  width: 100%;
  position: relative;
  align-self: center;
  &:focus {
    border-bottom: 2px solid ${colorTheme.primary};
  }

  &::placeholder {
    color: inherit;
    font-family: inherit;
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${colorTheme.base};
  border: 1px solid ${colorTheme.border};
  border-top: none;
  border-bottom: none;
  z-index: 5;

  ${Suggestion} {
    border-bottom: 1px solid ${colorTheme.border};
    font-size: ${fontSize.small}px;
  }
`;

function CitiesAutocomplete({ address, onChange, onSelect, onError, error }) {
  return (
    <PlacesAutocomplete
      value={address}
      onChange={onChange}
      onSelect={onSelect}
      onError={onError}
      searchOptions={searchOnlyCities}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <AutocompleteContainer>
          <WrapperInput>
            <WrapperIcon>
              <SearchIcon />
            </WrapperIcon>
            <Input
              {...getInputProps({ placeholder: 'Search City ...' })}
              autoFocus
            />
          </WrapperInput>
          <DropDownContainer>
            {error && <span>{error}</span>}
            {!error && loading && <span>Loading...</span>}
            {!error &&
              suggestions.map(suggestion => (
                <Suggestion {...getSuggestionItemProps(suggestion)}>
                  {suggestion.description}
                </Suggestion>
              ))}
          </DropDownContainer>
        </AutocompleteContainer>
      )}
    </PlacesAutocomplete>
  );
}

CitiesAutocomplete.propTypes = {
  address: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default CitiesAutocomplete;
