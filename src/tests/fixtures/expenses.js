import moment from 'moment';

export default  [{
    id: '1',
    amount: 299.95,
    dateAdded: 0,
    dateExpense: 1200,
    dateModified: 50000,
    description: "Water Bill",
    note: "this is payed last week",
    attachment: []
},
{
    id: '2',
    amount: 12.65,
    dateAdded: moment(0).subtract(4, 'days').valueOf(),
    dateExpense: 1200,
    dateModified: 2000,
    description: "Rent Bill",
    note: "this is payed 3 months ago",
    attachment: []
},
{
    id: '3',
    amount: 1.99,
    dateAdded: moment(0).add(4, 'days').valueOf(),
    dateExpense: 1200,
    dateModified: 0,
    description: "ice cream",
    note: "vanilla ice cream",
    attachment: ["receipt.png", "paper.png"]
}];