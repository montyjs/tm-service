/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Body from '../client/components/Body';

const wrapper = shallow(<Body />);

describe('Should render component', () => {
  it('should render without error', () => {
    expect(wrapper);
  });
});

describe('Should render props', () => {
  const review = 'This is a test review';
  const propsWrapper = shallow(<Body review={review} />);

  it('should render the review passed as props', () => {
    expect(propsWrapper.find('.review-data').text()).toBe(review);
  });
});
