// OBJECT DESTRUCTURING

// const person = { 
//     name: 'Kieran',
//     age: 21,
//     location: {
//         city: 'Manchester',
//         temp: 15
//     }
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const { city, temp:temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name : publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);


// ARRAY DESTRUCTING

const address = ['Street', 'City', 'County', 'Postcode'];
const [street, city, county = 'Wigan', postcode] = address;
console.log(`I am in ${city} which is in ${county}`);

const item = ['Coffee (Cold)', '£2.00', '£12.50', '£3.00'];
const [product, , mediumPrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}`);
