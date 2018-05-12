import moment from 'moment';

// GET VISIBLE EXPENSES. THE ARGUMENT PASSED DOWN ARE ALL THE EXPENSES AND FILTERS
export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    // ONLY RETURN THE EXPENSES WHO MATCH THE STATEMENTS
    return expenses.filter((expense) => {
        // IF DATE ADDED SORTING IS SELECTED 
        let date;
        if (sortBy === 'date_oldest' || sortBy === 'date_newest')
        {
            date = moment(expense.dateAdded);
        }
        // IF DATE EXPENSE SORTING IS SELECTED 
        else if (sortBy === 'date_expense_oldest' || sortBy === 'date_expense_newest')
        {
            date = moment(expense.dateExpense);            
        }

        const startDateMatch = startDate ? startDate.isSameOrBefore(date, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(date, 'day') : true;
        // CHECK IF THE TEXT IS INCLUDED IN THE DESCRIPTION OF THE EXPENSE
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date_oldest')
        {
            // IF 'A' IS OLDER (GREATER) THAN 'B', THEN SHOW A FIRST
            // IF 'A' IS MORE RECENT (LESS) THAN 'B', THEN SHOW B FIRST
            // (-1 = A, 1 = B)
            return a.dateAdded > b.dateAdded ? 1 : -1;
        }
        else if (sortBy === 'date_newest')
        {
            // IF 'A' IS OLDER (GREATER) THAN 'B', THEN SHOW A FIRST
            // IF 'A' IS MORE RECENT (LESS) THAN 'B', THEN SHOW B FIRST
            // (-1 = A, 1 = B)
            return a.dateAdded > b.dateAdded ? -1 : 1;
        }
        else if (sortBy === 'date_expense_oldest')
        {
            // IF 'A' IS OLDER (GREATER) THAN 'B', THEN SHOW A FIRST
            // IF 'A' IS MORE RECENT (LESS) THAN 'B', THEN SHOW B FIRST
            // (-1 = A, 1 = B)
            return a.dateExpense > b.dateExpense ? 1 : -1;
        }
        else if (sortBy === 'date_expense_newest')
        {
            // IF 'A' IS OLDER (GREATER) THAN 'B', THEN SHOW A FIRST
            // IF 'A' IS MORE RECENT (LESS) THAN 'B', THEN SHOW B FIRST
            // (-1 = A, 1 = B)
            return a.dateExpense > b.dateExpense ? -1 : 1;
        }
        else if (sortBy === 'amount_low_high')
        {
            // IF 'A' IS GREATER THAN 'B', THEN SHOW A FIRST
            // IF 'A' IS LESS THAN 'B', THEN SHOW B FIRST
            // (-1 = A, 1 = B)
            return a.amount > b.amount ? 1 : -1;
        }   
        else if (sortBy === 'amount_high_low')
        {
            // IF 'A' IS GREATER THAN 'B', THEN SHOW A FIRST
            // IF 'A' IS LESS THAN 'B', THEN SHOW B FIRST
            // (-1 = A, 1 = B)
            return a.amount > b.amount ? -1 : 1;
        }  
    });        
};

export const getExpensesTotalAmount = (expenses) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export const getExpensesTotalCount = (expenses) => {
    return expenses.length;
}