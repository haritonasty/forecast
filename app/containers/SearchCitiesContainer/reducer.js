/*
 *
 * SearchCitiesContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_ADDRESS, SET_ERROR } from './constants';

export const initialState = fromJS({ address: '', error: '' });

function citiesContainerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADDRESS:
      return state.set('address', action.address);
    case SET_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default citiesContainerReducer;
