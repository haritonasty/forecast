/*
 *
 * DateContainer actions
 *
 */

import { CHANGE_DATE } from './constants';

export function changeDate(value) {
  return {
    type: CHANGE_DATE,
    value,
  };
}
