import { mapDispatchToProps } from '../index';
import { changeCurrentCity, removeCity } from '../../CitiesList/actions';

describe('<CityContainer />', () => {
  // it('should render a <City /> ', () => {
  //   const props = { city: { city: 'moscow' }, id: '1', currentCity: '2' };
  //   const wrapper = shallow(<CityContainer {...props} />);
  //   expect(wrapper.contains(<City />)).toBeDefined();
  // });
  // let wrapper, props;
  // beforeEach(() => {
  //   props = { city: { city: 'moscow' }, id: '1', currentCity: '2' };
  //   wrapper = shallow(<CityContainer {...props} />);
  // });

  describe('mapDispatchToProps', () => {
    describe('changeCurrentCity', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.changeCurrentCity).toBeDefined();
      });

      it('should dispatch changeCurrentCity when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const cityId = '1';
        // wrapper.props().onChangeCity();
        result.changeCurrentCity(cityId);
        expect(dispatch).toHaveBeenCalledWith(changeCurrentCity(cityId));
      });
    });

    describe('removeCity', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.removeCity).toBeDefined();
      });

      it('should dispatch removeCity when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const cityId = '1';
        result.removeCity(cityId);
        expect(dispatch).toHaveBeenCalledWith(removeCity(cityId));
      });
    });
  });
});
