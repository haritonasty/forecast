import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { changeCurrentCity, initCitiesList } from './actions';
import { INIT_CITIES } from './constants';

export function* initCities() {
  try {
    const { citiesList, currentCity } = yield call(
      request,
      `https://us-central1-forecast-csssr.cloudfunctions.net/getCities`,
    );
    yield put(initCitiesList(citiesList));
    yield put(changeCurrentCity(currentCity));
  } catch (err) {
    console.log(err);
  }
}

export default function* CitiesSaga() {
  yield takeEvery(INIT_CITIES, initCities);
}
