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
 * Default selector used by SearchCitiesContainer
 */

const selectCitiesList = () =>
  createSelector(selectCity, cities => cities.get('citiesList').toJS());

const selectCurrCity = () =>
  createSelector(selectCity, citiesState => citiesState.get('currentCity'));

const selectCurrCityInfo = id =>
  createSelector(selectCity, citiesState =>
    citiesState.getIn(['citiesList', id]).toJS(),
  );

export default selectCity;
export { selectCitiesList, selectCurrCity, selectCurrCityInfo };
