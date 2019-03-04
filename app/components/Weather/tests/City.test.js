import React from 'react';
import { mount } from 'enzyme';

import City from '../City';

describe('<City />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<City className="test" />);
    expect(renderedComponent.find('span').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <span>Hello world!</span>;
    const renderedComponent = mount(<City>{content}</City>);
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
