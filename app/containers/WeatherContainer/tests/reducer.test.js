import { fromJS } from 'immutable';
import weatherContainerReducer from '../reducer';

describe('weatherContainerReducer', () => {
  it('returns the initial state', () => {
    expect(weatherContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
