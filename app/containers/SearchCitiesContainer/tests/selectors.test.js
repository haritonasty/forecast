import { fromJS } from 'immutable';

import selectAddress, { selectFoundCity, selectError } from '../selectors';

describe('selectAddress', () => {
  it('should select the address state', () => {
    const addressState = fromJS({
      address: '',
      error: '',
    });
    const mockedState = fromJS({
      address: addressState,
    });
    expect(selectAddress(mockedState)).toEqual(addressState);
  });
});

describe('selectFoundCity', () => {
  const addressSelector = selectFoundCity();
  it('should select the address state', () => {
    const address = {
      address: 'moscow',
      error: '',
    };
    const mockedState = fromJS({ address });
    expect(addressSelector(mockedState)).toEqual(address.address);
  });
});

describe('selectError', () => {
  const errorSelector = selectError();
  it('should select the error state', () => {
    const address = {
      address: 'moscow',
      error: 'error',
    };
    const mockedState = fromJS({ address });
    expect(errorSelector(mockedState)).toEqual(address.error);
  });
});
