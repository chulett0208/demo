import React from 'react';
import {shallow} from 'enzyme';
import NavBar from './navBar';

describe('Navbar page', () => {
    it('should render without crashing', () => {
        const navBarPage = shallow(<NavBar />)
    })
});