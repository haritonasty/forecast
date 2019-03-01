/*
 *
 * SearchCitiesContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_ADDRESS,
  GET_CITY_INFO,
  SET_ERROR,
  WAS_ERROR,
} from './constants';

export const initialState = fromJS({ address: '', error: '' });

function citiesContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITY_INFO:
      return state;
    case CHANGE_ADDRESS:
      return state.set('address', action.address);
    case SET_ERROR:
      return state.set('error', action.error);
    case WAS_ERROR:
      return state;
    default:
      return state;
  }
}

export default citiesContainerReducer;
