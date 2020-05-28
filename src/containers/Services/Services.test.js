import React from 'react';
import {shallow} from 'enzyme';

import Services from './services';

describe('Services page', () => {
    it('should render without crashing', () => {
        const servicesPage = shallow(<Services />)
    })
});