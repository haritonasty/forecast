import { fromJS } from 'immutable';

import makeSelectWeather, { selectWeather } from '../selectors';

describe('selectWeather', () => {
  it('should select the weather state', () => {
    const weatherState = fromJS({
      weather: '',
    });
    const mockedState = fromJS({
      weather: weatherState,
    });
    expect(selectWeather(mockedState)).toEqual(weatherState);
  });
});

describe('makeSelectWeather', () => {
  const weatherSelector = makeSelectWeather();
  it('should select the whole weather state in JS notation', () => {
    const weather = {
      temp: 5,
      info: { humidity: 5, wind: 5, precipitation: 44 },
    };
    const mockedState = fromJS({ weather });
    expect(weatherSelector(mockedState)).toEqual(weather);
  });
});
