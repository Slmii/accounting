import { 
    setTextFilter, 
    setStartDate, 
    setEndDate 
} from '../../actions/filters';
import moment from 'moment';

test('this will set the textfilter with provided value', () =>{
    const text = 'bill';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('this will set the textfilter without provided value', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('this will set the startDate value', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('this will set the endDate value', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});