/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../client/components/Reviews';

const wrapper = shallow(<Reviews review={{ username: 'trevor' }} />);

describe('Should render', () => {
  it('should render without error', () => {
    expect(wrapper);
  });
});
