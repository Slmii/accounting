import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('this will remove an expense', () => {
    const action = removeExpense({ id: 1 });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 1
    });
});

test('this will edit an expense', () => {
    const updates = {
        amount: 250,
        attachment: "cool.png",
        dateAdded: "10-10-2017",
        dateModified: "22-01-2019",
        description: "test edit expense"
    }
    const action = editExpense(1, updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 1,
        updates: updates
    });
});

test('this will add an expense with provided values', () => {
    const expenseData = {
        amount: 250,
        attachment: "cool.png",
        dateAdded: "10000",
        dateExpense: "15000",
        dateModified: "500000",
        description: "test edit expense",
        note: "this is a note for adding a new expense"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('this will add an expense without provided values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            amount: 0,
            attachment: "",
            dateAdded: 0,
            dateExpense: 0,
            dateModified: 0,
            description: "",
            note: ""
        }
    });
});