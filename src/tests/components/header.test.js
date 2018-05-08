//react-test-renderer
import React from 'react';
import Header from '../../components/header';
import { shallow } from 'enzyme';

test('should render Header correctly', () =>{
    const wrapper = shallow(<Header />);
    // MACTHING SNAPSNOT (A COMPONENT)
    expect(wrapper).toMatchSnapshot();
});
