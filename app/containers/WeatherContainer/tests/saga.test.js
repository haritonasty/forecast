import { takeEvery } from 'redux-saga/effects';
import { CHANGE_CURRENT_CITY } from '../../CitiesList/constants';
import { CHANGE_DATE } from '../../DateContainer/constants';
import weatherSaga, { setNewWeatherSaga } from '../saga';

describe('weatherSaga Saga', () => {
  const WeatherSaga = weatherSaga();

  it('should start task to watch for CHANGE_CURRENT_CITY, CHANGE_DATE actions', () => {
    const takeEveryDescriptor = WeatherSaga.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(CHANGE_CURRENT_CITY, setNewWeatherSaga),
      takeEvery(CHANGE_DATE, setNewWeatherSaga),
    );
  });
});

// describe('setNewWeatherSaga Saga', () => {
//   let setWeatherGenerator;
//
//   beforeEach(() => {
//     setWeatherGenerator = setNewWeatherSaga();
//
//     const selectDescriptor = setWeatherGenerator.next().value;
//     expect(selectDescriptor).toMatchSnapshot();
//
//     const selectDescriptor2 = setWeatherGenerator.next().value;
//     expect(selectDescriptor2).toMatchSnapshot();
//   });
//
// });
