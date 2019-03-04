import React from 'react';
import { shallow } from 'enzyme';

import accordionDecorator from '../index';

describe('<accordionDecorator />', () => {
  it('Expect to have isOpen props on child component', () => {
    const Test = () => <div />;
    const TestComponent = accordionDecorator(Test);
    const value = 'some text';
    const props = { value };
    const wrapper = shallow(<TestComponent {...props} />);
    const res = wrapper.find(Test).props();
    expect(res.isOpen).toEqual(true);
  });

  it('Expect to have toggleItem props on child component', () => {
    const Test = () => <div />;
    const TestComponent = accordionDecorator(Test);
    const wrapper = shallow(<TestComponent />);
    const res = wrapper.find(Test).props();
    expect(res.toggleItem).toBeDefined();
  });

  it('Expect to have other props on child component', () => {
    const Test = () => <div />;
    const TestComponent = accordionDecorator(Test);
    const value = 'some text';
    const props = { value };
    const wrapper = shallow(<TestComponent {...props} />);
    const res = wrapper.find(Test).props();
    expect(res.value).toBeDefined();
  });

  it('Expect to have state={open:true} by default in HOC', () => {
    const TestComponent = accordionDecorator(() => {});
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.instance().state.open).toEqual(true);
  });

  it('Expect to have toggleItem() in HOC', () => {
    const TestComponent = accordionDecorator(() => {});
    const props = { value: 'some text' };
    const wrapper = shallow(<TestComponent {...props} />);
    expect(wrapper.instance().toggleItem).toBeDefined();
  });

  it('Expect to change state by calling toggleItem() in HOC', () => {
    const TestComponent = accordionDecorator(() => {});
    const wrapper = shallow(<TestComponent />);
    wrapper.instance().toggleItem();
    expect(wrapper.instance().state.open).toEqual(false);
  });

  it('Expect to change state by calling toggleItem() 2 times in HOC', () => {
    const TestComponent = accordionDecorator(() => {});
    const wrapper = shallow(<TestComponent />);
    wrapper.instance().toggleItem();
    wrapper.instance().toggleItem();
    expect(wrapper.instance().state.open).toEqual(true);
  });
});
