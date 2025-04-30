// this is view for js
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is warning');

//lets , const
// let age=30;
// age=31;
// console.log(age);

const score=30;
console.log(score);

//datatype
//string, numbers, boolean, null , undefined

const name = 'Rojifa';
const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);

//Template String
console.log(`My name is ${name} and I am  ${age}`);

const hello=`My name is ${name} and I am  ${age}`;
console.log(hello);

//couple string property
const s='Hello World!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());

const d='technology, computer, IT, code';
console.log(d.split(','));


// Arrays -variable that hold multiple values

const numbers= new Array(1,2,3,4,5,6,7);
console.log(numbers);

const fruits = ['apples','oranges','bananas'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));
console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));
console.log(fruits);

//for a person
const person={
    firstName: 'Rojifa',
    lastName: 'Akhter',
    age: 30,
    hobbies:['cooking','drawing','movies'],
    address:{
        street:'50 main st',
        city:'Baston',
        state:'MA'
    }
}


console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);


const { firstName, lastName, address: { city } } = person;

console.log(firstName);
console.log(city);

person.email = 'test@gmail.com';
console.log(person);


//json formate
const todos= [
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    }
];
// console.log(todos[1].text);
