import React from 'react';
import { shallow } from 'enzyme';

import Weather from '../index';
import City from '../City';
import StyledLoader from '../StyledLoader';
import Temperature from '../Temperature';

describe('<Weather />', () => {
  it('renders City inside', () => {
    const props = { isLoading: true, temp: 5 };
    const renderedComponent = shallow(<Weather {...props} />);
    expect(renderedComponent.contains(<City />)).toEqual(true);
  });

  it('render StyledLoader unside', () => {
    const props = { isLoading: true, temp: 5 };
    const WeatherComp = shallow(<Weather {...props} />);
    expect(WeatherComp.contains(<StyledLoader />)).toEqual(true);
  });

  it('no render StyledLoader unside', () => {
    const props = { isLoading: false, temp: 5 };
    const WeatherComp = shallow(<Weather {...props} />);
    expect(WeatherComp.contains(<StyledLoader />)).toEqual(false);
  });

  it('no render Temperature unside', () => {
    const props = { isLoading: false, temp: null };
    const WeatherComp = shallow(<Weather {...props} />);
    expect(
      WeatherComp.contains(<Temperature>{props.temp}</Temperature>),
    ).toEqual(false);
  });

  it('render Temperature unside', () => {
    const props = { isLoading: false, temp: 6 };
    const WeatherComp = shallow(<Weather {...props} />);
    expect(
      WeatherComp.contains(<Temperature>{props.temp}</Temperature>),
    ).toEqual(true);
  });

  it('not render another tags or components inside', () => {
    const props = { isLoading: false, temp: 5 };
    const renderedComponent = shallow(
      <Weather {...props}>
        <br />
      </Weather>,
    );
    expect(renderedComponent.contains(<br />)).toEqual(false);
  });
});
