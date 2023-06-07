"use strict";
//working with the arrays
let stringArr = ['one', 'two', 'hey'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = [false, 'evh', 129, true];
stringArr[0] = 'Aditya';
stringArr.push('Tyagi');
guitars[0] = 12;
guitars.unshift('Strat');
let test = [];
let band = [];
band.push('Tyagi');
console.log(typeof (band));
//Tuples
let myTuple = ['Aditya Tyagi', 21, true];
myTuple[1] = 12;
//Objects in TypeScript
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = myTuple;
