import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../components/home';
import expenses from '../fixtures/expenses';

test('should render home page', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot();
});