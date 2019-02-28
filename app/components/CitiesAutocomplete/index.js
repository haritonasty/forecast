/**
 *
 * CitiesAutocomplete
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import PlacesAutocomplete from 'react-places-autocomplete';

const searchOnlyCities = { types: ['(cities)'] };

/* eslint-disable react/prefer-stateless-function */
class CitiesAutocomplete extends React.Component {
  render() {
    return (
      <PlacesAutocomplete
        value={this.props.address}
        onChange={this.props.onChange}
        onSelect={this.props.onSelect}
        searchOptions={searchOnlyCities}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search City ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                // const style = suggestion.active
                //   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                //   : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      // style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

CitiesAutocomplete.propTypes = {
  address: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
};

export default CitiesAutocomplete;
