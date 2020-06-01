import React from 'react';
import {shallow} from 'enzyme';
import Content from './content';

describe('Content page', () => {
    it('should render without crashing', () => {
        shallow(<Content />)
    })
});