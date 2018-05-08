import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const configureStore = () => {
    // CREATING STORE. COMBINE 2 REDUCERS INTO 1 STORE
    // WHEN CALLING A DISPATCH, IT CHEKS IN WHICH REDUCERS IT MUST WORK
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

export default configureStore;

