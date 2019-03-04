import { shallow } from 'enzyme/build';
import React from 'react';
import { enzymeFind } from 'styled-components/test-utils';
import { StyledCountry } from '../../../components/Country';
import { CitiesList, mapDispatchToProps } from '../index';
import { initCities } from '../actions';

describe('<CitiesList />', () => {
  it('should render the <CountryWrapper /> component', () => {
    const props = {
      cities: {
        USA: { '1': 'USA' },
      },
      initCities: () => {},
    };
    const wrapper = shallow(<CitiesList {...props} />);
    expect(enzymeFind(wrapper, StyledCountry)).toBeDefined();
  });

  describe('mapDispatchToProps', () => {
    describe('initCities', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.initCities).toBeDefined();
      });

      it('should dispatch initCities when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.initCities();
        expect(dispatch).toHaveBeenCalledWith(initCities());
      });
    });
  });
});
