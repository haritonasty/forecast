import { fromJS } from 'immutable';
import dateContainerReducer from '../reducer';

describe('dateContainerReducer', () => {
  it('returns the initial state', () => {
    expect(dateContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
