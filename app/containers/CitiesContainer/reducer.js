/*
 *
 * CitiesContainer reducer
 *
 */

import { fromJS, List, Map } from 'immutable';
import { ADD_NEW_CITY, CHANGE_ADDRESS, CHANGE_CURRENT_CITY, GET_CITY_INFO } from './constants';

export const initialState = Map({
  citiesList: List(),
  address: '',
  currentCity: Map(),
});

function citiesContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITY_INFO:
      return state;
    case CHANGE_ADDRESS:
      return state.set('address', action.address);
    case CHANGE_CURRENT_CITY:
      return state.set('currentCity', action.city);
    case ADD_NEW_CITY:
      return state.set(
        'citiesList',
        state.get('citiesList').push(fromJS(action.city)),
      );
    default:
      return state;
  }
}

export default citiesContainerReducer;
