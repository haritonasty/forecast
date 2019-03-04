import { mapDispatchToProps } from '../index';
import { changeDate } from '../actions';

describe('<DateContainer />', () => {
  describe('mapDispatchToProps', () => {
    describe('onChange', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChange).toBeDefined();
      });

      it('should dispatch changeDate when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const date = '11.11.11';
        result.onChange(date);
        expect(dispatch).toHaveBeenCalledWith(changeDate(date));
      });
    });
  });
});
