import { mount } from 'enzyme';
import React from 'react';
import { enzymeFind } from 'styled-components/test-utils';
import City, { DeleteButton, StyledCity, Wrapper } from '../index';

describe('<City />', () => {
  it('should always call onClick on <StyledCity />', () => {
    const submitSpy = jest.fn();
    const city = 'moscow';
    const wrapper = mount(<StyledCity onClick={submitSpy}>{city}</StyledCity>);
    wrapper.props().onClick();
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should always call onClick on <DeleteButton />', () => {
    const submitSpy = jest.fn();
    const city = 'moscow';
    const wrapper = mount(
      <DeleteButton onClick={submitSpy}>{city}</DeleteButton>,
    );
    wrapper.props().onClick();
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should render an <Wrapper> tag', () => {
    const props = { value: 'moscow', isCurrent: false };
    const wrapper = mount(<City {...props} />);
    const renderedComponent = enzymeFind(wrapper, Wrapper);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should not render an <DeleteButton> tag if !isCurrent', () => {
    const props = { value: 'moscow', isCurrent: false };
    const wrapper = mount(<City {...props} />);
    const renderedComponent = enzymeFind(wrapper, DeleteButton);
    expect(renderedComponent).toBeDefined();
  });

  it('should render a <StyledCity /> tag with value as a children inside', () => {
    const value = 'moscow';
    const wrapper = mount(<City value={value} />);
    const renderedComponent = enzymeFind(wrapper, StyledCity);
    expect(renderedComponent.props().children).toEqual(value);
  });

  it('should render an <DeleteButton> tag with WrapperIcon inside', () => {
    const value = '✕';
    const wrapper = mount(<City />);
    const renderedComponent = enzymeFind(wrapper, DeleteButton);
    expect(renderedComponent.props().children).toEqual(value);
  });
});
