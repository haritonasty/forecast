/**
 *
 * SearchCitiesContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import CitiesAutocomplete from '../../components/CitiesAutocomplete';
import { initCities } from '../CitiesList/actions';
import { changeAddress, getCityInfo, wasError } from './actions';
import { selectError, selectFoundCity } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class SearchCitiesContainer extends React.PureComponent {
  componentDidMount() {
    this.props.initCities();
  }

  render() {
    return (
      <CitiesAutocomplete
        address={this.props.address}
        onChange={this.props.onChangeAddress}
        onSelect={this.props.onSelectCity}
        onError={this.props.handleError}
        error={this.props.error}
      />
    );
  }
}

SearchCitiesContainer.propTypes = {
  address: PropTypes.string,
  error: PropTypes.string,
  initCities: PropTypes.func,
  onSelectCity: PropTypes.func,
  onChangeAddress: PropTypes.func,
  handleError: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  address: selectFoundCity(),
  error: selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    initCities: () => dispatch(initCities()),
    onSelectCity: city => dispatch(getCityInfo(city)),
    handleError: err => dispatch(wasError(err)),
    onChangeAddress: address => dispatch(changeAddress(address)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'address', reducer });
const withSaga = injectSaga({ key: 'address', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchCitiesContainer);
