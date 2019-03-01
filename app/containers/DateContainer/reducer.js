/*
 *
 * DateContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { subDays } from 'date-fns';
import { CHANGE_DATE } from './constants';

export const initialState = fromJS({ date: subDays(new Date(), 1) });

function dateReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DATE:
      return state.set('date', action.value);
    default:
      return state;
  }
}

export default dateReducer;
