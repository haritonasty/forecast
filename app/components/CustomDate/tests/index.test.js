import { mount } from 'enzyme';
import React from 'react';
import { enzymeFind } from 'styled-components/test-utils';
import CustomDate, { Button, WrapperIcon } from '../index';

describe('<CustomDate />', () => {
  it('should always call onClick', () => {
    const submitSpy = jest.fn();
    const customValue = '03/01/19';
    const wrapper = mount(
      <Button type="button" onClick={submitSpy}>
        {customValue}
      </Button>,
    );
    wrapper.props().onClick();
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should render an <button> tag', () => {
    const customValue = '03/01/19';
    const wrapper = mount(<CustomDate customValue={customValue} />);
    const renderedComponent = enzymeFind(wrapper, Button);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should render an <button> tag with customValue as a children inside', () => {
    const customValue = '03/01/19';
    const wrapper = mount(<CustomDate customValue={customValue} />);
    const renderedComponent = enzymeFind(wrapper, Button);
    expect(renderedComponent.props().children[1]).toEqual(customValue);
  });

  it('should render an <WrapperIcon> tag with WrapperIcon inside', () => {
    const customValue = '03/01/19';
    const wrapper = mount(<CustomDate customValue={customValue} />);
    const renderedComponent = enzymeFind(wrapper, WrapperIcon);
    expect(renderedComponent.type()).toEqual('div');
  });
});
