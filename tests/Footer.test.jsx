/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../client/components/Footer';

const wrapper = shallow(<Footer />);

describe('Should render', () => {
  it('should render without error', () => {
    expect(wrapper);
  });
});