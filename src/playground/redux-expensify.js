import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ACTION GENERATORS
// SET UP DEFAULT PARAMETERS IN AN OBJECT, IF THERE ARE NO PARAMETERS, SET THE OBJECT TO EMPTY
const addExpense = ({ description = '', note = '', amount = 0, attachment = '', dateAdded = 0, dateModified = 0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        attachment,
        dateAdded,
        dateModified
    }
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates  
});

const removeExpense = ({ id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// REDUCERS
// 1. REDUCERS ARE PURE FUNCTIONS (OUPUT IS DEPENDING OF ARGUMENTS INPUT)
// 2. NEVER CHANGE STATE OR ACTION, ONLY READ/RETURN!

// EXPENSES REDUCERS
const expensesReducerDefaultState = [];
function expensesReducer(state = expensesReducerDefaultState, action)
{
    switch(action.type)
    {
        // LOOK FOR THE ACTION TYPE THAT HAS BEEN CALLED IN THE FUNCTION 'STORE.DISPATCH'
        case 'ADD_EXPENSE':
            // SPREAD OPERATOR. WHAT THIS DOES IS RETURNS AN ARRAY. 
            // IT GRABS ALL THE CURRENT ITEMS IN THE ARRAY WITH '...<ARRAY>' 
            // AND ADDS ARRAY ELEMENTS TO IT, MAKING IT ONE NEW ARRAY
            return [...state, action.expense ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id)
                {
                    return { 
                        // GRAB ALL EXISTING PROPERTIES
                        ...expense,
                        // OVERRIDE ALL PROPERTIES THAT ARE PASSED DOWN
                        ...action.updates
                    };
                }
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

// FILTERS REDUCERS
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
function filtersReducer(state = filtersReducerDefaultState, action)
{
    switch(action.type)
    {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

// GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // CHECK IF DATEADDED IS >= STARTDATE
        const startDateMatch = typeof startDate !== 'number' || expense.dateAdded >= startDate;
        // CHECK IF DATEADDED IS <= ENDDATE
        const endDateMatch = typeof endDate !== 'number' || expense.dateAdded <= endDate;
        // CHECK IF THE TEXT IS INCLUDED IN THE DESCRIPTION OF THE EXPENSE
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date')
        {
            // IF 'A' IS OLDER (GREATER) THAN 'B', THEN SHOW A FIRST
            // IF 'A' IS MORE RECENT (LESS) THAN 'B', THEN SHOW B FIRST
            // (-1 = A, 1 = B)
            return a.dateAdded > b.dateAdded ? -1 : 1;
        }
        else if (sortBy === 'amount')
        {
            // IF 'A' IS GREATER THAN 'B', THEN SHOW A FIRST
            // IF 'A' IS LESS THAN 'B', THEN SHOW B FIRST
            // (-1 = A, 1 = B)
            return a.amount > b.amount ? -1 : 1;
        }   
    });        
};

// CREATING STORE. COMBINE 2 REDUCERS INTO 1 STORE
// WHEN CALLING A DISPATCH, IT CHEKS IN WHICH REDUCERS IT MUST WORK
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

// LOOKING FOR CHANGED IN THE STORE
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// CALL THE DISPATCH ACTIONS
const expenseOne = store.dispatch(addExpense({ description: 'Rent January', amount: 650, dateAdded: 1200 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Rent February', amount: 550, dateAdded: 2500 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('Jan'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


// const demoState = {
//     expenses: [{
//         id: 1,
//         description: 'Rent',
//         note: 'This was the note of the Rent',
//         amount: 250,
//         attachment: 'images/image.png',
//         dateAdded: 0,
//         dateModified: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // DATE OR AMOUNT
//         startDate: undefined,
//         endDate: undefined
//     },
// };