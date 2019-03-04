import { enzymeFind } from 'styled-components/test-utils';

import React from 'react';
import { shallow } from 'enzyme';
import WeatherInfo from '../../../components/WeatherInfo';
import { WeatherContainer, StyledWeather, Wrapper } from '../index';

describe('<WeatherContainer />', () => {
  it('should render the <WeatherInfo /> component', () => {
    const info = { humidity: 6, wind: 4, precipitation: 5 };
    const temp = 5;
    const city = 'moscow';
    const isLoading = false;
    const props = { weather: { city, temp, info, isLoading } };
    const renderedComponent = shallow(<WeatherContainer {...props} />);
    expect(renderedComponent.contains(<WeatherInfo info={info} />)).toEqual(
      true,
    );
  });

  it('should render the <StyledWeather /> component', () => {
    const info = { humidity: 6, wind: 4, precipitation: 5 };
    const temp = 5;
    const city = 'moscow';
    const isLoading = false;
    const props = { weather: { city, temp, info, isLoading } };
    const renderedComponent = shallow(<WeatherContainer {...props} />);
    expect(
      renderedComponent.contains(
        <StyledWeather city={city} temp={temp} isLoading={isLoading} />,
      ),
    ).toEqual(true);
  });

  it('should render the <Wrapper /> component', () => {
    const info = { humidity: 6, wind: 4, precipitation: 5 };
    const temp = 5;
    const city = 'moscow';
    const isLoading = false;
    const props = { weather: { city, temp, info, isLoading } };
    const wrapper = shallow(<WeatherContainer {...props} />);
    expect(enzymeFind(wrapper, Wrapper)).toBeDefined();
  });
});
