/**
 *
 * CitiesContainer
 *
 */

import { isEmpty } from 'lodash';
import { groupBy } from 'lodash/collection';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import CitiesAutocomplete from '../../components/CitiesAutocomplete';
import { changeAddress, getCityInfo } from './actions';
import { selectCitiesList, selectFoundCity } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class CitiesContainer extends React.PureComponent {
  handleSelectCity = city => {
    this.props.onSelectCity(this.props.cities, city);
  };

  render() {
    const { cities, address, onChangeAddress } = this.props;
    const citiesByCountry = groupBy(cities, 'country');
    return (
      <>
        <CitiesAutocomplete
          address={address}
          onChange={onChangeAddress}
          onSelect={this.handleSelectCity}
        />
        <ul>
          {!isEmpty(citiesByCountry) &&
            Object.keys(citiesByCountry).map(country => (
              <li key={country}>
                {country}
                <ul>
                  {citiesByCountry[country].map(city => (
                    <li key={city.id}>{city.city}</li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

CitiesContainer.propTypes = {
  cities: PropTypes.array,
  address: PropTypes.string,
  onSelectCity: PropTypes.func,
  onChangeAddress: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cities: selectCitiesList(),
  address: selectFoundCity(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelectCity: (cities, city) => dispatch(getCityInfo(cities, city)),
    onChangeAddress: address => dispatch(changeAddress(address)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cities', reducer });
const withSaga = injectSaga({ key: 'cities', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CitiesContainer);
