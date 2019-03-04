import { shallow } from 'enzyme/build';
import React from 'react';
import CitiesAutocomplete from '../../../components/CitiesAutocomplete';
import { mapDispatchToProps, SearchCitiesContainer } from '../index';
import { changeAddress, getCityInfo, wasError } from '../actions';

describe('<SearchCitiesContainer />', () => {
  it('should render the <CitiesAutocomplete /> component', () => {
    const renderedComponent = shallow(<SearchCitiesContainer />);
    expect(renderedComponent.contains(<CitiesAutocomplete />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onSelectCity', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSelectCity).toBeDefined();
      });

      it('should dispatch changeDate when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const city = 'moscow';
        result.onSelectCity(city);
        expect(dispatch).toHaveBeenCalledWith(getCityInfo(city));
      });
    });

    describe('handleError', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleError).toBeDefined();
      });

      it('should dispatch wasError when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const error = 'nothing';
        result.handleError(error);
        expect(dispatch).toHaveBeenCalledWith(wasError(error));
      });
    });

    describe('onChangeAddress', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeAddress).toBeDefined();
      });

      it('should dispatch changeAddress when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const address = 'moscow';
        result.onChangeAddress(address);
        expect(dispatch).toHaveBeenCalledWith(changeAddress(address));
      });
    });
  });
});
