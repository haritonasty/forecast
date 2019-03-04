/**
 *
 * CitiesList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import CityContainer from '../CityContainer';
import Country from '../../components/Country';
import Heading from '../../components/Heading';
import { accordionDecorator } from '../AccordionDecorator';

import saga from './saga';
import reducer from './reducer';
import { initCities } from './actions';
import { CitiesWrapper, Wrapper } from './Wrapper';
import { selectCitiesIDsListByCountry } from './selectors';

export const CountryWrapper = accordionDecorator(Country);

export class CitiesList extends React.Component {
  componentDidMount() {
    this.props.initCities();
  }

  shouldComponentUpdate(newState) {
    if (newState && this.props && this.props.cities) {
      return !isEqual(newState.cities, this.props.cities);
    }
    return true;
  }

  render() {
    const { cities } = this.props;
    return (
      <>
        <Heading>favorites cities</Heading>
        <Wrapper>
          <CitiesWrapper>
            {Object.keys(cities).map(country => (
              <CountryWrapper key={country} value={country}>
                {Object.keys(cities[country]).map(cityId => (
                  <CityContainer key={cityId} id={cityId} />
                ))}
              </CountryWrapper>
            ))}
          </CitiesWrapper>
        </Wrapper>
      </>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.object,
  initCities: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cities: selectCitiesIDsListByCountry(),
});

export function mapDispatchToProps(dispatch) {
  return {
    initCities: () => dispatch(initCities()),
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
