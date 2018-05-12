import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ dispatch, id, description, amount, dateAdded, dateModified, dateExpense }) => (    
    <tr>
        <td className="align-middle">{description}</td>
        <td className="align-middle">{numeral(amount).format('0,0.00')}</td>
        <td className="align-middle">{moment(dateAdded).format('MM-DD-YYYY')}</td>
        <td className="align-middle">{moment(dateExpense).format('MM-DD-YYYY')}</td>
        <td>
            <Link to={`/edit/${id}`} style={{ color: 'black' }}><button className="btn btn-primary"><i className="fas fa-edit"></i></button></Link>
            &nbsp;<button className="btn btn-danger" onClick={() => {
                dispatch(removeExpense({ id }));
            }}><i className="fas fa-trash-alt"></i></button>
        </td>
    </tr>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
};

export default connect(mapStateToProps)(ExpenseListItem);