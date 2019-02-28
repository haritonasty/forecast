import { call, put, takeEvery } from 'redux-saga/effects';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { addNewCity, changeCurrentCity } from './actions';
import { GET_CITY_INFO } from './constants';

function isExistingCity(cities, cityId) {
  return !cities.every(city => city.id !== cityId);
}

export function* getCityInfoSaga({ cities, city }) {
  try {
    const [cityInfo] = yield call(geocodeByAddress, city);
    const id = cityInfo.place_id;
    if (!isExistingCity(cities, id)) {
      const { lat, lng } = yield call(getLatLng, cityInfo);

      const [{ short_name: cityName }] = cityInfo.address_components;
      const country = cityInfo.formatted_address.split(', ').pop();

      yield put(addNewCity({ id, city: cityName, country, lat, lng }));
      yield put(changeCurrentCity({ id, city: cityName, country, lat, lng }));
    }
  } catch (err) {
    console.log('error');
  }
}

export default function* FindPlacesSaga() {
  yield takeEvery(GET_CITY_INFO, getCityInfoSaga);
}
