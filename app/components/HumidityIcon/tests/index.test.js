import React from 'react';
import { shallow } from 'enzyme';

import HumidityIcon from '../index';

describe('<HumidityIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<HumidityIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
