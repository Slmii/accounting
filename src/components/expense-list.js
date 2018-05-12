import React from 'react';
import ExpenseListItem from './expense-list-item';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className="row">
        <div className="col-md-12">
            <div className="table-responsive">
                <table className="table table-hover table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date Added</th>
                            <th scope="col">Date Expense</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* GET THE EXPENSES FROM THE PROPS HOC. THIS IS SAVED IN THE STORE
                        SO THAT ALL THE COMPONENTS CAN USE IT */}
                        {
                            props.expenses.lenght === 0 ? (
                                <tr><td>No expenses</td></tr>
                            ) : (
                                props.expenses.map((expense) => {
                                    return (
                                        <ExpenseListItem key={expense.id} {...expense} />
                                    );
                                })
                            )
                        }
                        {}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

// HIGHER ORDER COMPONENT
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
