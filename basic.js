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

//function
function addNums(num1 = 1, num2 = 1) {
    // console.log(num1 + num2);
    return num1 + num2;
  }
  console.log(addNums(5, 4));
  
  //array function
  // const addNum = (num1 = 1, num2 = 1) => num1 + num2;
  const addNum = num3 => num3 + 5;
  
  console.log(addNum(5));

  //constructive function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
  }
  Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  
  //Instantiate object
  const person1 = new Person("Rojifa", "Akhter", "2-1-1999");
  const person2 = new Person("Nirjona", "Sharker", "1-1-2001");
  
  console.log(person2.getBirthYear());
  console.log(person2.getFullName());
  console.log(person1);
  
  
//class
class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
    getBirthYear() {
      return this.dob.getFullYear();
    }
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  //Instantiate object
  const person3 = new Person("Rojifa", "Akhter", "2-1-1999");
  const person4 = new Person("Nirjona", "Sharker", "1-1-2001");
  
  console.log(person3.getBirthYear());
  console.log(person3.getFullName());
  console.log(person4);

  // console.log(window)

// alert(1);
//single element selector
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//multiple element selector

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
// ==================================
const btn = document.querySelector(".btn");

btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  // console.log('click');
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>Hello</h1>";
});
