import { shallow } from 'enzyme/build';
import React from 'react';
import CitiesList from '../../CitiesList';
import SearchCitiesContainer from '../../SearchCitiesContainer';
import WeatherContainer from '../../WeatherContainer';
import HomePage, { StyledHeader } from '../index';

describe('<HomePage />', () => {
  it('renders StyledHeader inside', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<StyledHeader />)).toEqual(true);
  });

  it('renders CitiesList inside', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<CitiesList />)).toEqual(true);
  });

  it('renders SearchCitiesContainer inside', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<SearchCitiesContainer />)).toEqual(true);
  });

  it('renders WeatherContainer inside', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<WeatherContainer />)).toEqual(true);
  });
});
