/*
The spread operator is written with three consecutive dots(... ).

It is new in ES6 and gives you the ability to expand, or spread,
iterable objects into multiple elements.
*/

const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);


const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

// you can also add new values to the concatenated array
const produce = [...fruits, 'brinjal', ...vegetables];

console.log(produce);

// Spread on objects
const about = {
    name: 'Devvrat'
};
const details = {
    job: 'Software Engineer'
};

const combinedObject = { ...about,
    ...details,
    location: 'India'
};
console.log(combinedObject);

const clonedObject = { ...combinedObject};
console.log(clonedObject);