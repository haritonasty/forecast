/*
 *
 * DateContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_DATE } from './constants';

export const initialState = fromJS({ date: new Date() });

function dateReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DATE:
      return state.set('date', action.value);
    default:
      return state;
  }
}

export default dateReducer;
