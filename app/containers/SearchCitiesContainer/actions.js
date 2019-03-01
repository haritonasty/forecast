/*
 *
 * SearchCitiesContainer actions
 *
 */

import {
  CHANGE_ADDRESS,
  GET_CITY_INFO,
  SET_ERROR,
  WAS_ERROR,
} from './constants';

export function getCityInfo(city) {
  return {
    type: GET_CITY_INFO,
    city,
  };
}

export function changeAddress(address) {
  return {
    type: CHANGE_ADDRESS,
    address,
  };
}

export function setError(error) {
  return {
    type: SET_ERROR,
    error,
  };
}

export function wasError(error) {
  return {
    type: WAS_ERROR,
    error,
  };
}
