import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expense-form';
import { addExpense } from '../actions/expenses';

const Add = (props) => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Add</h1>
                </div>
            </div>
            <ExpenseForm 
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    //props.history.push('/');
                }}    
            />
        </div>
    </div>
);

// DONT NEED TO RETURN THE CURRENCT OBJECT, ONLY ADDING, SO NO NEED FOR MAPTOSTATE
export default connect()(Add);