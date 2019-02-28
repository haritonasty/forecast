import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the city state domain
 */

const selectCity = state => state.get('cities', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CitiesContainer
 */

const selectCitiesList = () =>
  createSelector(selectCity, cities => cities.get('citiesList').toJS());

const selectFoundCity = () =>
  createSelector(selectCity, citiesState => citiesState.get('address'));

const selectCurrCity = () =>
  createSelector(selectCity, citiesState => citiesState.get('currentCity'));

export default selectCity;
export { selectCitiesList, selectFoundCity, selectCurrCity };
