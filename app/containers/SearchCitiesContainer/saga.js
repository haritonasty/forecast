import { delay } from 'redux-saga';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { addNewCity, changeCurrentCity } from '../CitiesList/actions';
import { selectCitiesList } from '../CitiesList/selectors';
import { changeAddress, setError } from './actions';
import { GET_CITY_INFO, WAS_ERROR } from './constants';

export function* getCityInfoSaga({ city }) {
  const cities = yield select(selectCitiesList());
  try {
    const [cityInfo] = yield call(geocodeByAddress, city);

    const id = cityInfo.place_id;
    if (!cities[id]) {
      const { lat, lng } = yield call(getLatLng, cityInfo);

      const [{ short_name: cityName }] = cityInfo.address_components;
      const country = cityInfo.formatted_address.split(', ').pop();

      yield put(addNewCity(id, { id, city: cityName, country, lat, lng }));
      yield put(changeCurrentCity(id));
      yield put(changeAddress(''));
    } else {
      yield put(changeCurrentCity(id));
      yield put(changeAddress(''));
    }
  } catch (err) {
    console.log(err);
  }
}
export function* setErrorSaga({ error }) {
  try {
    yield put(setError(error));
    yield delay(700);
    yield put(changeAddress(''));
    yield put(setError(''));
  } catch (err) {
    console.log(err);
  }
}

export default function* FindPlacesSaga() {
  yield takeEvery(GET_CITY_INFO, getCityInfoSaga);
  yield takeLatest(WAS_ERROR, setErrorSaga);
}
