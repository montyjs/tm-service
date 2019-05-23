/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import fetch from 'jest-fetch-mock';
import App from '../client/components/app';

global.fetch = fetch;
const wrapper = shallow(<App />);
const instance = wrapper.instance();

describe('Rendoring test', () => {
  it('should render the component', () => {
    expect(wrapper);
  });
});

describe('App methods', () => {
  it('should have a method to gather review data', () => {
    const reviewsSpy = jest.spyOn(instance, 'getReviews');
    expect(reviewsSpy).toBeDefined();
  });

  it('should have a method to set star color', () => {
    const starColorSpy = jest.spyOn(instance, 'starColor');
    expect(starColorSpy).toBeDefined();
  });

  it('should have a method to up vote', () => {
    const upVoteSpy = jest.spyOn(instance, 'upVote');
    expect(upVoteSpy).toBeDefined();
  });
});
