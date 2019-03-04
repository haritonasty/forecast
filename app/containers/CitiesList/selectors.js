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

const selectCityInfo = (state, props) =>
  state.getIn(['cities', 'citiesList', props.id]).toJS();

const selectCitiesIDsListByCountry = () =>
  createSelector(selectCity, cities =>
    cities
      .get('citiesList')
      .map(city => city.get('country'))
      .groupBy(x => x)
      .toJS(),
  );

export default selectCity;
export {
  selectCitiesList,
  selectCurrCity,
  selectCityInfo,
  selectCitiesIDsListByCountry,
};
