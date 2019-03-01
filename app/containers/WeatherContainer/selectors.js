import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the weatherContainer state domain
 */

const selectWeather = state => state.get('weather', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by WeatherContainer
 */

const makeSelectWeather = () =>
  createSelector(selectWeather, weatherState => weatherState.toJS());

export default makeSelectWeather;
export { selectWeather };
