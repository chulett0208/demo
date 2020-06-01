import React from 'react';
import {shallow} from 'enzyme';
import Contact from './contact';

describe('Contact page', () => {
    it('should render without crashing', () => {
        shallow(<Contact />)
    })
});