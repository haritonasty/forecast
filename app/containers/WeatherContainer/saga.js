import { call, put, select, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import { CHANGE_CURRENT_CITY } from '../CitiesList/constants';
import { selectCurrCity, selectCurrCityInfo } from '../CitiesList/selectors';
import { CHANGE_DATE } from '../DateContainer/constants';
import makeSelectDate from '../DateContainer/selectors';
import { finishLoadWeather, loadWeather, setNewWeather } from './actions';

function getFormatDates(day) {
  const pattern = 'YYYY-MM-DD';
  const nextDay = addDays(day, 1);
  return [format(day, pattern), format(nextDay, pattern)];
}

export function* setNewWeatherSaga() {
  const key = '69f5aa29f81e43eb83b99dba5042cefb';
  const currDay = yield select(makeSelectDate());
  const id = yield select(selectCurrCity());
  try {
    if (!id) throw new Error("City didn't selected");
    const { lat, lng, city } = yield select(selectCurrCityInfo(id));
    if (!lng || !lat) throw new Error("City didn't selected");
    yield put(loadWeather());
    if (!currDay) throw new Error("Day didn't selected");
    const [dateStart, dateEnd] = getFormatDates(currDay);
    const requestURL = `https://api.weatherbit.io/v2.0/history/daily?start_date=${dateStart}&end_date=${dateEnd}&key=${key}&lat=${lat}&lon=${lng}`;

    const { data } = yield call(request, requestURL);
    const { temp, precip, wind_spd, rh } = data[0];
    yield put(
      setNewWeather({
        temp: parseInt(temp, 10),
        city,
        info: {
          precipitation: parseInt(precip, 10),
          wind: parseInt(wind_spd, 10),
          humidity: parseInt(rh, 10),
        },
      }),
    );
    yield put(finishLoadWeather());
  } catch (err) {
    console.log(err);
  }
}

export default function* weatherSaga() {
  yield takeEvery(CHANGE_CURRENT_CITY, setNewWeatherSaga);
  yield takeEvery(CHANGE_DATE, setNewWeatherSaga);
}
