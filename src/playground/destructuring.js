// Object Destructuring

// const person = {
//   name: "Andrew",
//   age: 26,
//   location: {
//     city: "Bursa",
//     temp: 92,
//   },
// };

// const { name, age } = person;

// const { city, temp } = person.location;

// console.log(`${name} is ${age}`);

// console.log(`${city} and ${temp}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// Array Destructuring

// const address = ["1299 S Juniper Street", "Nilüfer", "Bursa", "19147"];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
