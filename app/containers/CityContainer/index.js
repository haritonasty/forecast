/**
 *
 * CityContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import City from '../../components/City';
import { changeCurrentCity, removeCity } from '../CitiesList/actions';
import { selectCityInfo, selectCurrCity } from '../CitiesList/selectors';

export class CityContainer extends React.Component {
  shouldComponentUpdate(newState) {
    const isCurrentNow = this.props.id === this.props.currentCity;
    const isCurrentAfter = this.props.id === newState.currentCity;
    return !(isCurrentNow === isCurrentAfter);
  }

  handleChangeCity = () => {
    if (this.props.id === this.props.currentCity) return undefined;
    return this.props.changeCurrentCity(this.props.id);
  };

  handleRemoveCity = () => {
    this.props.removeCity(this.props.id);
  };

  render() {
    const { city, currentCity, id } = this.props;
    const isCurrent = currentCity === id;
    return (
      <City
        value={city.city}
        isCurrent={isCurrent}
        onChangeCity={this.handleChangeCity}
        onRemoveCity={this.handleRemoveCity}
      />
    );
  }
}

CityContainer.propTypes = {
  id: PropTypes.string,
  city: PropTypes.object,
  currentCity: PropTypes.string,
  changeCurrentCity: PropTypes.func,
  removeCity: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  city: selectCityInfo,
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

export default compose(withConnect)(CityContainer);
