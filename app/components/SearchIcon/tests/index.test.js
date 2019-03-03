import React from 'react';
import { shallow } from 'enzyme';

import SearchIcon from '../index';

describe('<SearchIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<SearchIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
