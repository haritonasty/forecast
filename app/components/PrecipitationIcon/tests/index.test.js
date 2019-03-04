import React from 'react';
import { shallow } from 'enzyme';

import PrecipitationIcon from '../index';

describe('<PrecipitationIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<PrecipitationIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
