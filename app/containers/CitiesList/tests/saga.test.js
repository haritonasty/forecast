import { put, takeEvery } from 'redux-saga/effects';
import { changeCurrentCity, initCitiesList } from '../actions';
import { INIT_CITIES } from '../constants';
import CitiesSaga, { initCities } from '../saga';

describe('CitiesSaga Saga', () => {
  const citiesSaga = CitiesSaga();

  it('should start task to watch for INIT_CITIES action', () => {
    const takeEveryDescriptor = citiesSaga.next().value;
    expect(takeEveryDescriptor).toEqual(takeEvery(INIT_CITIES, initCities));
  });
});

describe('initCities Saga', () => {
  let initCitiesGenerator;

  beforeEach(() => {
    initCitiesGenerator = initCities();

    const selectDescriptor = initCitiesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the initCitiesList, changeCurrentCity actions if it requests the data successfully', () => {
    const citiesList = {
      '1': { city: 'moscow', country: 'Russia', lan: 5, lng: 4, id: 1 },
    };
    const currentCity = '1';
    const response = { citiesList, currentCity };
    const putDescriptor = initCitiesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(initCitiesList(citiesList)));
    const putDescriptor2 = initCitiesGenerator.next(response).value;
    expect(putDescriptor2).toEqual(put(changeCurrentCity(currentCity)));
  });
});
