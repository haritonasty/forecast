import { fromJS } from 'immutable';
import { subDays } from 'date-fns';
import { changeDate } from '../actions';

import dateReducer from '../reducer';

describe('dateReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({ date: subDays(new Date(), 1) });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(dateReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeDate action correctly', () => {
    const fixture = subDays(new Date(), 12);
    const expectedResult = state.set('date', fixture);

    expect(dateReducer(state, changeDate(fixture))).toEqual(expectedResult);
  });
});
