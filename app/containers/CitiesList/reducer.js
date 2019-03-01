/*
 *
 * CitiesList reducer
 *
 */

import { fromJS, Map } from 'immutable';
import {
  ADD_NEW_CITY,
  CHANGE_CURRENT_CITY,
  INIT_CITIES_LIST,
  REMOVE_CITY,
} from './constants';

export const initialState = Map({ citiesList: Map(), currentCity: '' });

function citiesListReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_CITY:
      return state.set('currentCity', action.cityId);
    case REMOVE_CITY:
      return state.deleteIn(['citiesList', action.cityId]);
    case ADD_NEW_CITY:
      return state.setIn(['citiesList', action.id], fromJS(action.city));
    case INIT_CITIES_LIST:
      return state.set('citiesList', fromJS(action.cities));
    default:
      return state;
  }
}

export default citiesListReducer;
