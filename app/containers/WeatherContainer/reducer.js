/*
 *
 * WeatherContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_NEW_WEATHER, WEATHER_LOADED, WEATHER_LOADING } from './constants';

export const initialState = fromJS({
  temp: null,
  info: {
    wind: null,
    precipitation: null,
    humidity: null,
  },
  isLoading: false,
});

function weatherContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_WEATHER:
      return fromJS(action.weather);
    case WEATHER_LOADING:
      return state.setIn(['isLoading'], true);
    case WEATHER_LOADED:
      return state.setIn(['isLoading'], false);
    default:
      return state;
  }
}

export default weatherContainerReducer;
