/*
 *
 * CitiesList actions
 *
 */

import {
  ADD_NEW_CITY,
  CHANGE_CURRENT_CITY,
  INIT_CITIES,
  INIT_CITIES_LIST,
  REMOVE_CITY,
} from './constants';

export function addNewCity(id, city) {
  return {
    type: ADD_NEW_CITY,
    id,
    city,
  };
}

export function changeCurrentCity(cityId) {
  return {
    type: CHANGE_CURRENT_CITY,
    cityId,
  };
}

export function removeCity(cityId) {
  return {
    type: REMOVE_CITY,
    cityId,
  };
}

export function initCities() {
  return {
    type: INIT_CITIES,
  };
}

export function initCitiesList(cities) {
  return {
    type: INIT_CITIES_LIST,
    cities,
  };
}
