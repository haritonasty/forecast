import { fromJS } from 'immutable';
import { subDays } from 'date-fns';
import { changeDate } from '../actions';

import dateReducer, { initialState } from '../reducer';

describe('dateReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({ date: subDays(new Date(), 1) });
  });

  it('should return the initial state', () => {
    // const expectedResult = state.get('date').toJS();
    expect(dateReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle the changeDate action correctly', () => {
    const fixture = subDays(new Date(), 12);
    const expectedResult = state.set('date', fixture);

    expect(dateReducer(state, changeDate(fixture))).toEqual(expectedResult);
  });
});
