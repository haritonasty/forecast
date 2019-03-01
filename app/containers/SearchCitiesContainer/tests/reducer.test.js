import { fromJS } from 'immutable';
import citiesContainerReducer from '../reducer';

describe('citiesContainerReducer', () => {
  it('returns the initial state', () => {
    expect(citiesContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
