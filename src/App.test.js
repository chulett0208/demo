import React from 'react';
import {shallow} from 'enzyme';
import App from './app';

describe('App page', () => {
    it('should render without crashing', () => {
        const contentPage = shallow(<App />)
    })
});