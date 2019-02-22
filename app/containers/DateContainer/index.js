/**
 *
 * DateContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';
import CustomDate from '../../components/CustomDate';
import { changeDate } from './actions';
import makeSelectDate from './selectors';
import reducer from './reducer';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';

/* eslint-disable react/prefer-stateless-function */
export class DateContainer extends React.PureComponent {
  formatDate = date => format(date, 'dddd, Do MMMM');

  render() {
    return (
      <DatePicker
        customInput={
          <CustomDate customValue={this.formatDate(this.props.date)} />
        }
        selected={this.props.date}
        onChange={this.props.onChange}
        dropdownMode="scroll"
      />
    );
  }
}

DateContainer.propTypes = {
  onChange: PropTypes.func,
  date: PropTypes.instanceOf(Date),
};

const mapStateToProps = createStructuredSelector({
  date: makeSelectDate(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChange: date => dispatch(changeDate(date)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'date', reducer });

export default compose(
  withReducer,
  withConnect,
)(DateContainer);
