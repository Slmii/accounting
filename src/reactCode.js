// IMPORT OTHER JS FILES. IF YOU  WANNA USE FUNCTION FROM OTHER JS FILES
// WHEN USING DEFAULT, DEFINE IT USE BEFORE THE CURLY BRACES

// IF WANNA USE JSX WITH WEBPACK, THEN NEED BABEL-LOADER AND BABEL-CORE
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/app-router';
import configureStore from './store/configure'
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// WITH PROVIDER THE WHOLE APPLICATION CAN USE THE STORE DATA
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// YOU CAN CALL THE COMPONENT (CLASS) IN THE ReactDOM render. IN THE MAIN COMPONENT YOU RENDER ALL THE OTHER COMPONENTS
ReactDOM.render(jsx, document.getElementById('wrapper'));