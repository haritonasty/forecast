import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Heading from '../index';

describe('<Heading />', () => {
  it('should render an <h2> tag', () => {
    const wrapper = mount(<Heading />);
    const renderedComponent = enzymeFind(wrapper, Heading);
    expect(renderedComponent.type()).toEqual('h2');
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<Heading>{children}</Heading>);
    const renderedComponent = enzymeFind(wrapper, Heading);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
