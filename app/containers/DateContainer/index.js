/**
 *
 * DateContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DatePicker from 'react-datepicker';

import injectReducer from 'utils/injectReducer';

import { subDays } from 'date-fns';
import format from 'date-fns/format';

import CustomDate from '../../components/CustomDate';

import reducer from './reducer';
import { changeDate } from './actions';
import makeSelectDate from './selectors';

import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';

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
        minDate={subDays(new Date(), 31)}
        maxDate={subDays(new Date(), 1)}
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

export function mapDispatchToProps(dispatch) {
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
