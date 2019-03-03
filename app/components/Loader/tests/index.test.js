import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Loader from '../index';

describe('<Loader />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(<Loader />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
