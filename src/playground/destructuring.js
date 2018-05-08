// OBJECT DESTRUCTURING
// const book = {
//     title: 'Geloofswaarheden',
//     author: 'Said Nursi',
//     publisher: {
//         name: 'Lucide Inkt'
//     }
// }

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

// ARRAY DESTRUCTURING

// const address = ['Thedingecamp 57', 'Emmen', 'Drenthe', '7824GT'];
// const [ street, city, , zip ] = address;
// console.log(`You are in ${street}, ${city}, ${zip}`);

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];
const [ coffee, small, medium, large ] = item;
console.log(`A large ${coffee} costs ${large}`);
