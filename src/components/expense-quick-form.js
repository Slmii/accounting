import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
// DATE OBJECT (NPM PACKAGE)
import moment from 'moment';
import { SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        amount: '',
        dateAdded: now,
        dateExpense: now,
        calendarFocused: false,
        invalidDescription: 'form-control',
        invalidAmount: 'form-control',
        selectedTypeGlyph: 'fas fa-plus',
        selectedTypeBackgroundColor: '#21a344'
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description: description
        }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        {
            this.setState(() => ({
                amount: amount
            }));
        }
    };

    onDateChange = (dateExpense) => {
        if(dateExpense)
        {
            this.setState(() => ({
                dateExpense: dateExpense
            }));
        }
    };
    
    onFocusChage = ({ focused  }) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };

    onSelectChange = (e) => {
        const selectedValue = e.target.value;
        let selectedTypeGlyph, selectedTypeBackgroundColor;

        if (selectedValue === 'income')
        {
            selectedTypeGlyph           = 'fas fa-plus';
            selectedTypeBackgroundColor = '#21a344';
        }
        else if (selectedValue === 'expense')
        {
            selectedTypeGlyph           = 'fas fa-minus';
            selectedTypeBackgroundColor = '#dc3545';
        }

        this.setState(() => ({
            selectedTypeGlyph,
            selectedTypeBackgroundColor
        }));
    }

    onClick = () => {
        !this.state.description ?
            this.setState(() => ({
                invalidDescription: 'form-control border border-danger'
            })) :
            this.setState(() => ({
                invalidDescription: 'form-control'
            }));
        
        !this.state.amount ?
            this.setState(() => ({
                invalidAmount: 'form-control border border-danger'
            })) :
            this.setState(() => ({
                invalidAmount: 'form-control'
            }));
        
        if (this.state.description && this.state.amount)
        {
            this.setState(() => ({
                description: '',
                amount: '',
                dateAdded: now,
                calendarFocused: false,
                invalidDescription: 'form-control',
                invalidAmount: 'form-control',
            }));
            
            // HOME.JS
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                dateAdded: this.state.dateAdded.valueOf(),
                dateExpense: this.state.dateExpense.valueOf()
            });
        }
    };

    render()
    {
        return (
            <div className="container" style={{marginBottom: "50px"}}>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-3 col-lg-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label style={{color: "#ffffff", borderColor: this.state.selectedTypeBackgroundColor, backgroundColor: this.state.selectedTypeBackgroundColor}} className="input-group-text" htmlFor="income-expense"><i className={this.state.selectedTypeGlyph}></i></label>
                            </div>
                            <select style={{borderColor: this.state.selectedTypeBackgroundColor}} className="custom-select" id="income-expense" onChange={this.onSelectChange}>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="input-group mb-3">
                            <input 
                                autoFocus 
                                type="text" 
                                name="description" 
                                id="expense-description" 
                                className={this.state.invalidDescription} 
                                placeholder="Description" 
                                value={this.state.description} 
                                onChange={this.onDescriptionChange} 
                                style={{border: `1px solid ${this.state.selectedTypeBackgroundColor}`, boxShadow: `0 0 3px ${this.state.selectedTypeBackgroundColor}`}}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">€ / $</span>
                            </div>
                            <input 
                                type="text" 
                                name="amount"
                                id="expense-amount" 
                                className={this.state.invalidAmount}
                                placeholder="Amount" 
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                                style={{border: `1px solid ${this.state.selectedTypeBackgroundColor}`, boxShadow: `0 0 3px ${this.state.selectedTypeBackgroundColor}`}}
                            />  
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2">
                        <div className="input-group mb-3">
                            <SingleDatePicker
                                date={this.state.dateExpense}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChage}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            /> 
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-auto">
                        <div className="input-group mb-3">
                            <button type="submit" className="btn btn-primary btn-lg" onClick={this.onClick}><i className="fas fa-plus-square"></i> Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};