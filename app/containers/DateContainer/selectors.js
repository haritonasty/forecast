import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dateContainer state domain
 */

const selectDate = state => state.get('date', initialState);

/**
 * Other specific selectors
 */

/*
 * Default selector used by DateContainer
 */

const makeSelectDate = () =>
  createSelector(selectDate, headerState => headerState.get('date'));

export default makeSelectDate;
export { selectDate };
