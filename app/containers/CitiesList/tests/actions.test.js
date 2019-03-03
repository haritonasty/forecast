import {
  addNewCity,
  changeCurrentCity,
  initCities,
  initCitiesList,
  removeCity,
} from '../actions';
import {
  ADD_NEW_CITY,
  CHANGE_CURRENT_CITY,
  INIT_CITIES,
  INIT_CITIES_LIST,
  REMOVE_CITY,
} from '../constants';

describe('Cities Actions', () => {
  describe('addNewCity', () => {
    it('should return the correct type and the passed name', () => {
      const id = 'Max';
      const city = {
        city: 'Oryol',
        country: 'Russia',
        lan: 5,
        lng: 5,
        id: '123',
      };
      const expectedResult = {
        type: ADD_NEW_CITY,
        id,
        city,
      };

      expect(addNewCity(id, city)).toEqual(expectedResult);
    });
  });

  describe('changeCurrentCity', () => {
    it('should return the correct type and the passed name', () => {
      const id = 'Max';
      const expectedResult = {
        type: CHANGE_CURRENT_CITY,
        cityId: id,
      };

      expect(changeCurrentCity(id)).toEqual(expectedResult);
    });
  });

  describe('removeCity', () => {
    it('should return the correct type and the passed name', () => {
      const id = 'Max';
      const expectedResult = {
        type: REMOVE_CITY,
        cityId: id,
      };

      expect(removeCity(id)).toEqual(expectedResult);
    });
  });

  describe('initCitiesList', () => {
    it('should return the correct type and the passed name', () => {
      const cities = { '123': { city: 'Moscow' }, '1234': { city: 'Oryol' } };
      const expectedResult = {
        type: INIT_CITIES_LIST,
        cities,
      };

      expect(initCitiesList(cities)).toEqual(expectedResult);
    });
  });

  describe('initCities', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = { type: INIT_CITIES };
      expect(initCities()).toEqual(expectedResult);
    });
  });
});
