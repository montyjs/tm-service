/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/app';

const wrapper = shallow(<App />);

describe('Rendoring test', () => {
  it('should render the component', () => {
    expect(wrapper);
  });
});
