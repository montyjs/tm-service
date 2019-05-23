/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import fetch from 'jest-fetch-mock';
import App from '../client/components/app';

global.fetch = fetch;
const wrapper = shallow(<App />);

describe('Rendoring test', () => {
  it('should render the component', () => {
    expect(wrapper);
  });
});
