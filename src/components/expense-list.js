import React from 'react';
import ExpenseListItem from './expense-list-item';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { getVisibleExpenses, getExpensesTotalAmount, getExpensesTotalCount } from '../selectors/expenses';

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
                            props.expenses.length == 0 ? (
                                <tr><td colSpan="5" className="text-center">No expenses</td></tr>
                            ) : (
                                props.expenses.map((expense) => {
                                    return (
                                        <ExpenseListItem key={expense.id} {...expense} />
                                    );
                                })
                            )
                        }
                    </tbody>
                </table>
                <table className="table table-borderless table-sm borderless">
                {
                    getExpensesTotalCount(props.expenses) > 0 && 
                    <tbody>
                    <tr>
                        <td style={{width: '75%'}} colSpan="2"></td>
                        <td className="text-right"><b>Total:</b></td>
                        <td className="text-right">{getExpensesTotalCount(props.expenses)}</td>
                    </tr>
                    <tr>
                        <td style={{width: '75%'}} colSpan="2"></td>
                        <td className="text-right"><b>Total amount:</b></td>
                        <td className="text-right">{numeral(getExpensesTotalAmount(props.expenses)).format('0,0.00')}</td>
                    </tr>
                    </tbody>
                }
                </table>
            </div>
        </div>
    </div>
);

// HIGHER ORDER COMPONENT
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
