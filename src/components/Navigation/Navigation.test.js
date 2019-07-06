import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navigation from './Navigation';

it('should render Navigation component', () => {
  shallow(<Navigation />);
});
