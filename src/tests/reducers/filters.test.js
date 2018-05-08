import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter value', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date_newest',
        startDate: undefined,
        endDate: undefined
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount_low_high' });
    expect(state.sortBy).toBe('amount_low_high');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount_low_high'
    };
    const action = { type: 'SORT_BY_DATE', sortBy: 'date_newest' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date_newest');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'bill' });
    expect(state.text).toBe('bill');
});

test('should startDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: 10000 });
    expect(state.startDate).toEqual(10000);
});

test('should endDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: 5000 });
    expect(state.endDate).toEqual(5000);
});