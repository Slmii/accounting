// REDUCERS
// 1. REDUCERS ARE PURE FUNCTIONS (OUPUT IS DEPENDING OF ARGUMENTS INPUT)
// 2. NEVER CHANGE STATE OR ACTION, ONLY READ/RETURN!

import moment from 'moment';

// FILTERS REDUCERS
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date_newest',
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
                sortBy: action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
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

export default filtersReducer;