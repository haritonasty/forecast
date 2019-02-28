/*
 *
 * CitiesContainer actions
 *
 */

import {
  ADD_NEW_CITY,
  CHANGE_ADDRESS,
  CHANGE_CURRENT_CITY,
  GET_CITY_INFO,
} from './constants';

export function getCityInfo(cities, city) {
  return {
    type: GET_CITY_INFO,
    cities,
    city,
  };
}

export function addNewCity(city) {
  return {
    type: ADD_NEW_CITY,
    city,
  };
}

export function changeAddress(address) {
  return {
    type: CHANGE_ADDRESS,
    address,
  };
}

export function changeCurrentCity(city) {
  return {
    type: CHANGE_CURRENT_CITY,
    city,
  };
}
