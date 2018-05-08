import React from 'react';
import ExpenseList from './expense-list';
import ExpenseListFilters from './expense-list-filters';
import ExpenseQuickForm from './expense-quick-form';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

export const Home = (props) => (  
    <div style={{marginTop: "75px"}}>       
        <ExpenseQuickForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
            }}    
        />            
        <div className="container-fluid">
            <ExpenseListFilters />   
               
            <ExpenseList />
        </div>
    </div>
);

export default connect()(Home);