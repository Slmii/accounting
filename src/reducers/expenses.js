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
            // LOOP THROUGH ALL VALUE IN THE ARRAY
            return state.map((expense) => {
                // CHECK IF THE ID IS THE SAME AS THE ID ARGUMENT GIVEN
                if (expense.id === action.id)
                {
                    return { 
                        // GRAB ALL EXISTING PROPERTIES
                        ...expense,
                        // OVERRIDE ALL PROPERTIES THAT ARE PASSED DOWN
                        ...action.updates
                    };
                }
                else
                {
                    return expense;
                }
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

export default expensesReducer;