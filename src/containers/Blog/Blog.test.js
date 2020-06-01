import React from 'react';
import {shallow} from 'enzyme';
import Blog from './blog';

describe('Blog page', () => {
    it('should render without crashing', () => {
        shallow(<Blog />)
    })
});