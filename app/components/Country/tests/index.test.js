import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Country, { StyledCountry } from '../index';

describe('<Country />', () => {
  it('should render StyledCountry', () => {
    const props = { value: 'Russia', isOpen: true };
    const renderedComponent = shallow(<Country {...props} />);
    expect(renderedComponent.contains(<StyledCountry />)).toBeDefined();
  });

  it('should render children', () => {
    const props = {
      value: 'Russia',
      isOpen: true,
      children: ['Russia'],
    };
    const renderedComponent = renderer.create(<Country {...props} />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should not render children', () => {
    const props = {
      value: 'Russia',
      isOpen: false,
      children: ['Moscow'],
    };
    const renderedComponent = renderer.create(<Country {...props} />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
