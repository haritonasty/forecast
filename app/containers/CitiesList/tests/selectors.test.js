import { fromJS } from 'immutable';

import selectCity, {
  selectCitiesList,
  selectCurrCity,
  selectCityInfo,
  selectCitiesIDsListByCountry,
} from '../selectors';

describe('selectCity', () => {
  it('should select the cities state', () => {
    const citiesState = fromJS({
      '1': { city: 'moscow', country: 'Russia', lan: 5, lng: 5, id: '1' },
      '2': { city: 'oryol', country: 'Russia', lan: 4, lng: 4, id: '2' },
    });
    const mockedState = fromJS({
      cities: citiesState,
      currentCity: '1',
    });
    expect(selectCity(mockedState)).toEqual(citiesState);
  });
});

describe('selectCitiesList', () => {
  const citiesSelector = selectCitiesList();
  it('should select the cities list', () => {
    const citiesState = {
      '1': { city: 'moscow', country: 'Russia', lan: 5, lng: 5, id: '1' },
      '2': { city: 'oryol', country: 'Russia', lan: 4, lng: 4, id: '2' },
    };
    const mockedState = fromJS({
      cities: {
        citiesList: citiesState,
        currentCity: '1',
      },
    });
    expect(citiesSelector(mockedState)).toEqual(citiesState);
  });
});

describe('selectCityInfo', () => {
  it('should select the city info', () => {
    const citiesList = {
      '1': { city: 'moscow', country: 'Russia', lan: 5, lng: 5, id: '1' },
      '2': { city: 'oryol', country: 'Russia', lan: 4, lng: 4, id: '2' },
    };
    const currentCity = '1';
    const mockedState = fromJS({
      cities: {
        citiesList,
        currentCity,
      },
    });
    expect(selectCityInfo(mockedState, { id: '1' })).toEqual(citiesList['1']);
  });
});

describe('selectCurrCity', () => {
  it('should select the currentCity', () => {
    const currCity = selectCurrCity();
    const citiesList = {
      '1': { city: 'moscow', country: 'Russia', lan: 5, lng: 5, id: '1' },
      '2': { city: 'oryol', country: 'Russia', lan: 4, lng: 4, id: '2' },
    };
    const currentCity = '1';
    const mockedState = fromJS({
      cities: {
        citiesList,
        currentCity,
      },
    });
    expect(currCity(mockedState)).toEqual(currentCity);
  });
});

describe('selectCitiesIDsListByCountry', () => {
  it('should select cities groupBy countries', () => {
    const groupByCountry = selectCitiesIDsListByCountry();
    const citiesList = {
      '1': { city: 'moscow', country: 'Russia', lan: 5, lng: 5, id: '1' },
      '2': { city: 'detroit', country: 'USA', lan: 4, lng: 4, id: '2' },
      '3': { city: 'LA', country: 'USA', lan: 43, lng: 43, id: '3' },
    };
    const currentCity = '1';
    const mockedState = fromJS({
      cities: {
        citiesList,
        currentCity,
      },
    });

    const expectedResult = {
      Russia: { '1': 'Russia' },
      USA: { '2': 'USA', '3': 'USA' },
    };
    expect(groupByCountry(mockedState)).toEqual(expectedResult);
  });
});
