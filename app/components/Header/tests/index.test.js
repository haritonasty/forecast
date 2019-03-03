import React from 'react';
import { shallow } from 'enzyme';
import DateContainer from '../../../containers/DateContainer';

import Header, { StyledHeader } from '../index';

describe('<Header />', () => {
  it('should render StyledHeader', () => {
    const renderedComponent = shallow(<Header className="test" />);
    expect(renderedComponent.contains(<StyledHeader />)).toBeDefined();
  });

  it('should render DateContainer', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.contains(<DateContainer />)).toBe(true);
  });
});
