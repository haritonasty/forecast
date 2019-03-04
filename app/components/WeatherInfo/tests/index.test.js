import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import WeatherInfo from '../index';

describe('<WeatherInfo />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(<WeatherInfo />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should match the snapshot with info', () => {
    const props = { info: { humidity: 5, wind: 40, precipitation: 0 } };
    const renderedComponent = renderer
      .create(<WeatherInfo {...props} />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
