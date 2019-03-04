import { fromJS } from 'immutable';
import { finishLoadWeather, loadWeather, setNewWeather } from '../actions';
import weatherReducer from '../reducer';

describe('weatherReducer', () => {
  let state;
  let stateWithData;
  beforeEach(() => {
    state = fromJS({
      temp: null,
      info: {
        wind: null,
        precipitation: null,
        humidity: null,
      },
      isLoading: false,
    });
    stateWithData = fromJS({
      temp: 5,
      info: {
        wind: 3,
        precipitation: 2,
        humidity: 21,
      },
      isLoading: true,
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(weatherReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadWeather action correctly', () => {
    const isLoading = true;
    const expectedResult = state.set('isLoading', isLoading);
    expect(weatherReducer(state, loadWeather(isLoading))).toEqual(
      expectedResult,
    );
  });

  it('should handle the finishLoadWeather action correctly', () => {
    const isLoading = false;
    const expectedResult = stateWithData.set('isLoading', isLoading);
    expect(weatherReducer(stateWithData, finishLoadWeather(isLoading))).toEqual(
      expectedResult,
    );
  });

  it('should handle the setNewWeather action correctly', () => {
    const newWeather = {
      temp: 32,
      info: {
        wind: 22,
        precipitation: 11,
        humidity: 4,
      },
      isLoading: false,
    };
    const expectedResult = fromJS(newWeather);
    expect(weatherReducer(stateWithData, setNewWeather(newWeather))).toEqual(
      expectedResult,
    );
  });
});
