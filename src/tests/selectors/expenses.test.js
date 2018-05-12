import { getVisibleExpenses } from '../../selectors/expenses';
import { 
    sortByAmount, 
    sortByDate
} from '../../actions/filters';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'bill' ,
        sortBy: 'date_newest',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    // SHOULD ONLY SHOW THE FIRST AND SECOND OBJECT IN THE EXPENSES ARRAY
    // BECAUSE THE TEXT FILTER IS SET ON 'BILL'
    // ALSO NOTE THAT THE ORDER SHOULD BE CORRECT BECAUSE WE SET 'SORTBY' NEWEST DATE FIRST
    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date_newest',
        startDate:  moment(0),
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    // SHOULD ONLY SHOW THE FIRST AND SECOND OBJECT IN THE EXPENSES ARRAY
    // BECAUSE THE TEXT FILTER IS SET ON 'BILL'
    // ALSO NOTE THAT THE ORDER SHOULD BE CORRECT BECAUSE WE SET 'SORTBY' NEWEST DATE FIRST
    expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date_newest',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = getVisibleExpenses(expenses, filters);
    // SHOULD ONLY SHOW THE FIRST AND SECOND OBJECT IN THE EXPENSES ARRAY
    // BECAUSE THE TEXT FILTER IS SET ON 'BILL'
    // ALSO NOTE THAT THE ORDER SHOULD BE CORRECT BECAUSE WE SET 'SORTBY' NEWEST DATE FIRST
    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

// test('this will sorty by amount', () =>{
//     const filters = {
//         text: '',
//         sortBy: 'amount_high_low',
//         startDate: undefined,
//         endDate: undefined
//     };
//     const result = getVisibleExpenses(expenses, filters);
//     expect(result).toEqual([ expenses[0], expenses[1], expenses[2] ]);
// });

test('this will sorty by date', () =>{
    const filters = {
        text: '',
        sortBy: 'date_oldest',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ]);
});
