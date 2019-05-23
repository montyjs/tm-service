/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Title from '../client/components/Title';

const wrapper = shallow(<Title />);

describe('Should render', () => {
  it('should render without error', () => {
    expect(wrapper);
  });
});
