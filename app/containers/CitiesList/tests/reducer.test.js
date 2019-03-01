import { fromJS } from 'immutable';
import citiesListReducer from '../reducer';

describe('citiesListReducer', () => {
  it('returns the initial state', () => {
    expect(citiesListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
