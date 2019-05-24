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

describe('Should render props', () => {
  const propsWrapper = shallow(<Title title="Test Title" />);
  it('should render the passed in title', () => {
    expect(propsWrapper.find('.content-title').text()).toBe('Test Title');
  });
});
