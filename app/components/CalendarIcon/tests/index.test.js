import React from 'react';
import { shallow } from 'enzyme';

import CalendarIcon from '../index';

describe('<CalendarIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<CalendarIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
