import { createStore } from 'redux';

// ACTION GENERATORS, FUNCTION THAT RETURNS ACTION OBJECTS
// GIVE DEFAULT FOR IF ARGUMENT WILL BE EMPTY, THIS WAY YOU DONT HAVE TO CHECK IF THE 'TYPEOF IS NUMBER'
const incrementCount = (incrementBy = 1) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = (decrementBy = 1) => ({ 
    type: 'DECREMENT',
    decrementBy
});

const setCount = (set = 0) => ({ 
    type: 'SET',
    set
});

const resetCount = () => ({ 
    type: 'RESET',
});

// REDUCERS
// 1. REDUCERS ARE PURE FUNCTIONS (OUPUT IS DEPENDING OF ARGUMENTS INPUT)
// 2. NEVER CHANGE STATE OR ACTION, ONLY READ/RETURN!
function countReducer(state = 0, action) 
{
    switch (action.type) 
    {
        case 'INCREMENT':
            return state + action.incrementBy
        case 'DECREMENT':
            return state - action.decrementBy
        case 'RESET':
            return state = 0
        case 'SET':
            return state = action.set
        default:
        return state
    }
}

let store = createStore(countReducer);

// WHEN THE STATE CHANGES
const unsubscrice = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount(2));
store.dispatch(decrementCount());
store.dispatch(decrementCount(452));
store.dispatch(resetCount());
store.dispatch(setCount());