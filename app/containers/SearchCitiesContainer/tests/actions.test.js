import { changeAddress, getCityInfo, setError, wasError } from '../actions';
import {
  CHANGE_ADDRESS,
  GET_CITY_INFO,
  SET_ERROR,
  WAS_ERROR,
} from '../constants';

describe('SearchCities Actions', () => {
  describe('getCityInfo', () => {
    it('should return the correct type and the passed name', () => {
      const city = 'moscow';
      const expectedResult = { type: GET_CITY_INFO, city };
      expect(getCityInfo(city)).toEqual(expectedResult);
    });
  });

  describe('changeAddress', () => {
    it('should return the correct type and the passed name', () => {
      const address = 'moscow';
      const expectedResult = { type: CHANGE_ADDRESS, address };
      expect(changeAddress(address)).toEqual(expectedResult);
    });
  });

  describe('setError', () => {
    it('should return the correct type and the passed name', () => {
      const error = 'error text';
      const expectedResult = { type: SET_ERROR, error };
      expect(setError(error)).toEqual(expectedResult);
    });
  });

  describe('wasError', () => {
    it('should return the correct type and the passed name', () => {
      const error = 'error text';
      const expectedResult = { type: WAS_ERROR, error };
      expect(wasError(error)).toEqual(expectedResult);
    });
  });
});
