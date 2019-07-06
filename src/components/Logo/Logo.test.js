import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Logo from './Logo';

it('should render Logo component', () => {
  shallow(<Logo />);
});

it('should match Logo snapshot', () => {
  const wrapper = shallow(<Logo />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
