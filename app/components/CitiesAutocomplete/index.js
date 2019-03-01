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

const AutocompleteContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;
`;

const WrapperInput = styled.div`
  width: 100%;
  position: relative;
`;

const WrapperIcon = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  left: 20px;
`;

const Suggestion = styled.div`
  padding: 8px;
  text-align: left;
  color: ${colorTheme.baseInvert};
  cursor: pointer;
  &:hover {
    color: ${colorTheme.primary};
  }
`;

const Input = styled.input`
  background: transparent;
  min-height: 50px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${colorTheme.border};
  color: inherit;
  font-size: ${fontSize.medium}px;
  font-family: inherit;
  padding: 0 20px 0 60px;
  width: 100%;
  position: relative;
  align-self: center;

  &::placeholder {
    color: inherit;
    font-family: inherit;
  }
`;

const DropDownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${colorTheme.base};
  border: 1px solid ${colorTheme.border};
  border-top: none;
  border-bottom: none;

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
