/**
 *
 * SearchCitiesContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CitiesAutocomplete from '../../components/CitiesAutocomplete';

import saga from './saga';
import reducer from './reducer';
import { selectError, selectFoundCity } from './selectors';
import { changeAddress, getCityInfo, wasError } from './actions';

export class SearchCitiesContainer extends React.PureComponent {
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
  onSelectCity: PropTypes.func,
  onChangeAddress: PropTypes.func,
  handleError: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  address: selectFoundCity(),
  error: selectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
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
