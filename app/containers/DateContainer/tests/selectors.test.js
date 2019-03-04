import { fromJS } from 'immutable';

import makeSelectDate, { selectDate } from '../selectors';

describe('selectDate', () => {
  it('should select the date state', () => {
    const dateState = fromJS({
      date: '',
    });
    const mockedState = fromJS({
      date: dateState,
    });
    expect(selectDate(mockedState)).toEqual(dateState);
  });
});

describe('makeSelectDate', () => {
  const dateSelector = makeSelectDate();
  it('should select the username', () => {
    const date = '02.11.96';
    const mockedState = fromJS({
      date: {
        date,
      },
    });
    expect(dateSelector(mockedState)).toEqual(date);
  });
});
