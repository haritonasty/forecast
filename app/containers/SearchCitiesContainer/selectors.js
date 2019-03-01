import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the city state domain
 */

const selectAddress = state => state.get('address', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchCitiesContainer
 */

const selectFoundCity = () =>
  createSelector(selectAddress, addressState => addressState.get('address'));

const selectError = () =>
  createSelector(selectAddress, addressState => addressState.get('error'));

export default selectAddress;
export { selectFoundCity, selectError };
