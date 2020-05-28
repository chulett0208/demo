import React from 'react';
import {shallow} from 'enzyme';
import ColorButton from './ColorButton';

describe('Test ColorButton component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<ColorButton onClick={mockCallBack}>Ok!</ColorButton>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});