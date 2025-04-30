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


//
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
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// //for loops
// for(let i = 0; i <= 10; i++){
//     // console.log(i);
//     console.log(`For Loop Number: ${i}`);
// }
// //while loop
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// for(let i = 0; i < todos.length; i++){
//     // console.log(`For Loop Number: ${i}`);
//     console.log(todos[i].text);
// }
for(let todo of todos){
    console.log(todo.id);
}

//for each 
todos.forEach(function (todo){
    console.log(todo.text);
});
//map, 
const todoText = todos.map(function (todo){
    return todo.text;
});
//filter
const todoCompleted = todos.filter(function (todo){
    return todo.isCompleted ===true;
});
//map and filter
const todoComplete = todos.filter(function (todo){
    return todo.isCompleted ===true;
}).map(function (todo) {
    return todo.text;
})
console.log(todoComplete);

////condition
const x = 6;
const y = 11;

// if(x === 10){
//     console.log('x is 10');
// }else if(x > 10){
//  console.log('x is greater than 10');
// }else{
//    console.log('x is less than 10'); 
// }
// if (x > 5 || y > 10) {
//     console.log('x is more than 5 or more than 10');
// }
if (x > 5 && y > 10) {
    console.log('x is more than 5 or more than 10');
}

//ternary operator
const z = 9;

// const color = x > 10 ? "red" : "blue";
const color = 'green';

console.log(color);

//switch that is another way to evaluate a condition
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}