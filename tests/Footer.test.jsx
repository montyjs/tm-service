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

describe('Should accept a prop to execute for click events', () => {

  const clickMock = jest.fn();
  const clickWrapper = shallow(<Footer upVote={clickMock} />);
  const event = { target: { innerText: 'some text' } };

  it('should have a report button', () => {
    clickWrapper.find('.btn-report').simulate('click');
    expect(clickMock.call.length).toEqual(1);
  });

  it('should call the passed function when yes button is clicked', () => {
    clickWrapper.find('.btn-yes').simulate('click', event);
    expect(clickMock.call.length).toEqual(1);
  });

  it('should call the passed function when no button is clicked', () => {
    clickWrapper.find('.btn-no').simulate('click', event);
    expect(clickMock.call.length).toEqual(1);
  });
});
