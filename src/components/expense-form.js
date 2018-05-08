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

    constructor(props)
    {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount : '',
            note: props.expense ? props.expense.note : '',
            dateAdded: props.expense ? moment(props.expense.dateAdded) : now,
            dateModified: props.expense ? now : '',
            dateExpense: props.expense ? moment(props.expense.dateExpense) : now,
            calendarFocused: false,
            attachments: [],
            error: '',
            success: '',
            selectedTypeGlyph: 'fas fa-plus',
            selectedTypeBackgroundColor: '#21a344'
        };
    }

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
    
    onFocusChange = ({ focused  }) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note: note
        }));
    };

    onAttachmentChange = (e) => {
        const attachment = e.target.files;
        this.setState(() => ({
            attachments: [...this.state.attachments, attachment]
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount)
        {
            this.setState(() => ({
                error: 'Please fill in the description and amount!',
                success: ''
            }));
        }
        else
        {            
            this.setState(() => ({
                description: '',
                amount: '',
                note: '',
                dateAdded: now,
                calendarFocused: false,
                attachments: [],
                error: '',
                success: 'You have succesfully added a new expense!'
            }));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                note: this.state.note,
                dateAdded: this.state.dateAdded.valueOf(),
                dateModified: this.state.dateModified.valueOf(),
                dateExpense: this.state.dateExpense.valueOf(),
                attachments: this.state.attachments,
            });
        }
    };

    render()
    {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form encType="multipart/form-data" action="" method="" onSubmit={this.onSubmit}>
                        {this.state.error && <div className="form-group">
                            <div className="alert alert-danger">
                                <a href="#" className="close" data-dismiss="alert" aria-label="close"></a>
                                <i className="fas fa-exclamation-circle"></i> {this.state.error}
                            </div>
                        </div>}
                        {this.state.success && <div className="form-group">
                            <div className="alert alert-success">
                            <a href="#" className="close" data-dismiss="alert" aria-label="close"></a>
                                <i className="fas fa-check-circle"></i> {this.state.success}
                            </div>
                        </div>}
                        <div className="form-group">
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
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control" 
                                id="expense-description" 
                                placeholder="Description"
                                autoFocus
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="expense-amount" 
                                placeholder="Amount" 
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                            />
                        </div>
                        <div className="form-group">
                            <SingleDatePicker
                                date={this.state.dateExpense}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={2}
                                isOutsideRange={() => false}
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                className="form-control" 
                                id="expense-note" 
                                placeholder="Note" 
                                rows="3"
                                value={this.state.note}
                                onChange={this.onNoteChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="expense-attachment">Upload your attachment</label>
                            <input 
                                type="file" 
                                className="form-control-file" 
                                id="expense-attachment" 
                                multiple
                                onChange={this.onAttachmentChange}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">{this.props.expense ? 'Edit Expense' : 'Add expense'}</button>&nbsp;
                            <Link to='/' className="btn btn-primary" >Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};