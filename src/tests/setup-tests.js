// TEST RENDERING FOR REACT. THIS WILL BE LOADING IN BEFORE RUNNING TEST, THIS IS DONE IN THE
// JEST.CONFIG.JSON FILE
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
    adapter: new Adapter() 
});