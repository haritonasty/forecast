import React from 'react';
import { mount } from 'enzyme';

import Temperature, { StyledTemperature } from '../Temperature';

describe('<Temperature />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<Temperature className="test" />);
    expect(renderedComponent.find('span').prop('className')).toBeDefined();
  });

  // it('should render the content passed to it', () => {
  //   const children = <span>5</span>;
  //   const renderedComponent = mount(<Temperature>{children}°</Temperature>);
  //   expect(renderedComponent.contains(children)).toBe(true);
  // });
});

describe('<StyledTemperature />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<StyledTemperature className="test" />);
    expect(renderedComponent.find('span').prop('className')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = <span>Hello world!</span>;
    const renderedComponent = mount(
      <StyledTemperature>{content}</StyledTemperature>,
    );
    expect(renderedComponent.contains(content)).toBe(true);
  });
});
