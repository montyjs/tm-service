/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../client/components/Header';

const wrapper = shallow(<Header starColor={jest.fn()} />);

describe('Should render', () => {
  it('should render without error', () => {
    expect(wrapper);
  });
});

describe('Should accept props', () => {
  const propsWrapper = shallow(
    <Header
      username="Test"
      postdate="6 months ago"
      starColor={jest.fn()}
    />,
  );

  it('should render a postdate passed as props', () => {
    expect(propsWrapper.find('.timestamp').text()).toBe('· 6 months ago');
  });

  it('should render a username pass as props', () => {
    expect(propsWrapper.find('.author').text()).toBe('Test');
  });
});
