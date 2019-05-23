/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Body from '../client/components/Body';

const wrapper = shallow(<Body />);

describe('Should render', () => {
  it('should render without error', () => {
    expect(wrapper);
  });
});