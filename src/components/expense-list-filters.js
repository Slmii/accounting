import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
// DATE OBJECT (NPM PACKAGE)
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({
            calendarFocused: calendarFocused
        }));
    };

    render()
    {
        return (            
            <div className="row">
                <div className="col-md-4 col-lg-4 col-xl-7">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="filter" 
                            className="form-control" 
                            placeholder="What are you looking for?" 
                            value={this.props.filters.text} 
                            onChange={(e) => {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }} 
                        />
                    </div>     
                </div> 
                <div className="col-md-4 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <select className="form-control" value={this.props.filters.sortBy} onChange={(e) => {
                            if (e.target.value === "date_newest" || e.target.value === "date_oldest") 
                            { 
                                this.props.dispatch(sortByDate(e.target.value));
                            }
                            else
                            {
                                this.props.dispatch(sortByAmount(e.target.value));
                            }
                        }}>
                            <option value="date_newest">Date Added DESC</option>
                            <option value="date_oldest">Date Added ASC</option>
                            <option value="date_expense_newest">Date Expense DESC</option>
                            <option value="date_expense_oldest">Date Expense ASC</option>
                            <option value="amount_low_high">Amount low - high</option>
                            <option value="amount_high_low">Amount high - low</option>
                        </select> 
                    </div>
                </div>
                <div className="col-md-4 col-lg-5 col-xl-3">
                    <div className="form-group">
                        <DateRangePicker
                            startDate={this.props.filters.startDate} 
                            startDateId="startDate"
                            startDatePlaceholderText="Start Date"
                            endDate={this.props.filters.endDate} 
                            endDateId="endDate"
                            endDatePlaceholderText="End Date"
                            onDatesChange={this.onDatesChange} 
                            focusedInput={this.state.calendarFocused} 
                            onFocusChange={this.onFocusChange} 
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>            
        );
    };

}

// HIGHER ORDER COMPONENT
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);