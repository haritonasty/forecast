/*
 *
 * WeatherContainer actions
 *
 */

import { SET_NEW_WEATHER, WEATHER_LOADED, WEATHER_LOADING } from './constants';

export function setNewWeather(weather) {
  return {
    type: SET_NEW_WEATHER,
    weather,
  };
}
export function loadWeather() {
  return {
    type: WEATHER_LOADING,
  };
}

export function finishLoadWeather() {
  return {
    type: WEATHER_LOADED,
  };
}
