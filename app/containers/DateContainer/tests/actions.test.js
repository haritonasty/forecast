import { changeDate } from '../actions';
import { CHANGE_DATE } from '../constants';

describe('DateContainer actions', () => {
  describe('Change Date', () => {
    it('has a type of CHANGE_DATE', () => {
      const expected = {
        type: CHANGE_DATE,
      };
      expect(changeDate()).toEqual(expected);
    });
  });
});
