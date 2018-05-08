import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ dispatch, id, description, amount, dateAdded, dateModified, dateExpense }) => (    
    <tr>
        <td className="align-middle">{description}</td>
        <td className="align-middle">{amount}</td>
        <td className="align-middle">{moment(dateAdded).format('DD-MM-YYYY')}</td>
        <td className="align-middle">{dateModified ? moment(dateModified).format('DD-MM-YYYY') : 'N/A'}</td>
        <td className="align-middle">{moment(dateExpense).format('DD-MM-YYYY')}</td>
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