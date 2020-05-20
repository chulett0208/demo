import React from 'react';
import {shallow} from 'enzyme';
import Portfolio from './portfolio';

describe('Portfolio page', () => {
    it('should render without crashing', () => {
        const portfolioPage = shallow(<Portfolio />)
    })
});