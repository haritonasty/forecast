import { takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_CITY_INFO, WAS_ERROR } from '../constants';
import weatherSaga, { getCityInfoSaga, setErrorSaga } from '../saga';

describe('FindPlacesSaga Saga', () => {
  const findPlacesSaga = weatherSaga();

  it('should start task to watch for GET_CITY_INFO, WAS_ERROR actions', () => {
    const takeDescriptor = findPlacesSaga.next().value;
    expect(takeDescriptor).toEqual(
      takeEvery(GET_CITY_INFO, getCityInfoSaga),
      takeLatest(WAS_ERROR, setErrorSaga),
    );
  });
});
