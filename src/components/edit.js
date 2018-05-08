import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expense-form';
import { editExpense } from '../actions/expenses';

const Edit = (props) => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Edit Expense</h1>
                </div>
            </div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}    
            />
        </div>
    </div>    
)

// GET THE CURRENT OBJECT SO YOU GET THE DATA WHEN CLICKING EDIT
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(Edit);