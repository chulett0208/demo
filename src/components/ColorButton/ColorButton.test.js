import React from 'react';
import {shallow} from 'enzyme';
import ColorButton from './ColorButton';

describe('ColorButton page', () => {
    it('should render without crashing', () => {
        const aboutPage = shallow(<ColorButton />)
    })
});