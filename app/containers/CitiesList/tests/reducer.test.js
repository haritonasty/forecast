import { fromJS, Map } from 'immutable';
import {
  addNewCity,
  changeCurrentCity,
  initCitiesList,
  removeCity,
} from '../actions';
import citiesListReducer from '../reducer';

describe('citiesReducer', () => {
  let state;
  let stateWithData;
  beforeEach(() => {
    state = Map({ citiesList: Map(), currentCity: '' });
    stateWithData = Map({
      citiesList: Map({
        '12': Map({
          city: 'Oryol',
          country: 'Russia',
          lan: 0,
          lng: 5,
          id: '12',
        }),
        '123': Map({
          city: 'Oryol2',
          country: 'Russia',
          lan: 1,
          lng: 5,
          id: '123',
        }),
      }),
      currentCity: '12',
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(citiesListReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeCurrentCity action correctly', () => {
    const id = '123';
    const expectedResult = stateWithData.set('currentCity', id);
    expect(citiesListReducer(stateWithData, changeCurrentCity(id))).toEqual(
      expectedResult,
    );
  });

  it('should handle the removeCity action correctly', () => {
    const id = '12';
    const expectedResult = stateWithData.deleteIn(['citiesList', id]);
    expect(citiesListReducer(stateWithData, removeCity(id))).toEqual(
      expectedResult,
    );
  });

  it('should handle the addNewCity action correctly', () => {
    const id = '12';
    const city = {
      city: 'Oryol3',
      country: 'Russia',
      lan: 14,
      lng: 54,
      id: '1234',
    };
    const expectedResult = stateWithData.setIn(
      ['citiesList', id],
      fromJS(city),
    );
    expect(citiesListReducer(stateWithData, addNewCity(id, city))).toEqual(
      expectedResult,
    );
  });

  it('should handle the initCitiesList action correctly', () => {
    const cities = {
      '1234': {
        city: 'Oryol3',
        country: 'Russia',
        lan: 14,
        lng: 54,
        id: '1234',
      },
      '12345': {
        city: 'Oryol4',
        country: 'Russia',
        lan: 143,
        lng: 543,
        id: '12345',
      },
    };
    const expectedResult = stateWithData.set('citiesList', fromJS(cities));
    expect(citiesListReducer(stateWithData, initCitiesList(cities))).toEqual(
      expectedResult,
    );
  });
});
