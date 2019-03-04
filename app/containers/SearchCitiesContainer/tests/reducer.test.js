import { fromJS } from 'immutable';
import { changeAddress, setError } from '../actions';
import SearchCitiesReducer from '../reducer';

describe('citiesContainerReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({ address: '', error: '' });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(SearchCitiesReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeAddress action correctly', () => {
    const address = 'moscow';
    const expectedResult = state.set('address', address);
    expect(SearchCitiesReducer(state, changeAddress(address))).toEqual(
      expectedResult,
    );
  });

  it('should handle the setError action correctly', () => {
    const error = 'error text';
    const expectedResult = state.set('error', error);
    expect(SearchCitiesReducer(state, setError(error))).toEqual(expectedResult);
  });
});
