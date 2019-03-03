import { finishLoadWeather, loadWeather, setNewWeather } from '../actions';
import { SET_NEW_WEATHER, WEATHER_LOADED, WEATHER_LOADING } from '../constants';

describe('Weather Actions', () => {
  describe('setNewWeather', () => {
    it('should return the correct type and the passed name', () => {
      const weather = {
        temp: 0,
        info: { humidity: 4, wind: 40, precipitation: 0 },
      };
      const expectedResult = {
        type: SET_NEW_WEATHER,
        weather,
      };
      expect(setNewWeather(weather)).toEqual(expectedResult);
    });
  });

  describe('loadWeather', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = { type: WEATHER_LOADING };
      expect(loadWeather()).toEqual(expectedResult);
    });
  });

  describe('finishLoadWeather', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = { type: WEATHER_LOADED };
      expect(finishLoadWeather()).toEqual(expectedResult);
    });
  });
});
