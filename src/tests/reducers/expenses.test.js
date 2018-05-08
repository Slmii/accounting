import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer([], { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: undefined });
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 5,
        description: 'test',
        note: 'test note',
        amount: 500, 
        attachment: [],
        dateAdded: 10000,
        dateModified: 15000,
        dateExpense: 500000
    }
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 600000;
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: { amount } });
    expect(state[1].amount).toBe(600000);
});

test('should not edit an expense if expense not found', () => {
    const amount = 600000;
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: undefined, updates: { amount } });
    expect(state[1].amount).toBe(state[1].amount);
});