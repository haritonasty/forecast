/**
 *
 * CitiesList
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
import City from '../../components/City';
import Country from '../../components/Country';
import Heading from '../../components/Heading';

import { changeCurrentCity, removeCity } from './actions';
import reducer from './reducer';
import { selectCitiesList, selectCurrCity } from './selectors';
import saga from './saga';
import { CitiesWrapper, Wrapper } from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
export class CitiesList extends React.PureComponent {
  checkCity = cityId => {
    if (cityId === this.props.currentCity) return undefined;
    return this.props.changeCurrentCity(cityId);
  };

  render() {
    const { cities, currentCity } = this.props;
    const citiesByCountry = groupBy(cities, 'country');
    return (
      <>
        <Heading>favorites cities</Heading>
        <Wrapper>
          <CitiesWrapper>
            {!isEmpty(citiesByCountry) &&
              Object.keys(citiesByCountry).map(country => (
                <Country key={country} value={country}>
                  {citiesByCountry[country].map(city => (
                    <City
                      key={city.id}
                      value={city.city}
                      isCurrent={city.id === currentCity}
                      onChangeCity={() => this.checkCity(city.id)}
                      onRemoveCity={() => this.props.removeCity(city.id)}
                    />
                  ))}
                </Country>
              ))}
          </CitiesWrapper>
        </Wrapper>
      </>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.object,
  currentCity: PropTypes.string,
  changeCurrentCity: PropTypes.func,
  removeCity: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cities: selectCitiesList(),
  currentCity: selectCurrCity(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeCurrentCity: cityId => dispatch(changeCurrentCity(cityId)),
    removeCity: cityId => dispatch(removeCity(cityId)),
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
)(CitiesList);
