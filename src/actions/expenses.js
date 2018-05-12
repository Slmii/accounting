import uuid from 'uuid';

// ACTION GENERATORS
// SET UP DEFAULT PARAMETERS IN AN OBJECT, IF THERE ARE NO PARAMETERS, SET THE OBJECT TO EMPTY
export const addExpense = ({ description = '', note = '', amount = 0, currency = '', attachment = '', dateAdded = 0, dateModified = 0, dateExpense = 0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        currency, 
        attachment,
        dateAdded,
        dateModified,
        dateExpense
    }
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates  
});

export const removeExpense = ({ id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});