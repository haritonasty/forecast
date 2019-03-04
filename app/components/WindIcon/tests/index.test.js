import React from 'react';
import { shallow } from 'enzyme';

import WindIcon from '../index';

describe('<WindIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<WindIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
