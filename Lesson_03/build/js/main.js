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
myObj = {};
const exampleObject = {
    prop1: 'aditya',
    prop2: true,
};
let evh = {
    name: "Aadi",
    albums: [2025, 'aadi', 'I'],
    active: true,
};
let jb = {
    name: 'Tyagi',
    albums: [2006, 'Dawood'],
};
evh = jb;
console.log(jb);
console.log(typeof (jb));
console.log(typeof (evh));
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(evh));
let hey1 = {
    name: 'aditya',
    age: 21,
    male: true,
    address: [12],
};
const greetBoy = (boytype) => {
    var _a;
    return `hello boy ${(_a = boytype.name) === null || _a === void 0 ? void 0 : _a.toLowerCase}`;
};
//Enums - Enums allow to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.Typescript provides both numeric and string-based enums.
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "";
})(Direction || (Direction = {}));
var Value;
(function (Value) {
    Value[Value["Up"] = 0] = "Up";
    Value[Value["Down"] = 2] = "Down";
    Value[Value["Right"] = 3] = "Right";
    Value[Value["None"] = 4] = "None";
    Value[Value["Hey"] = 5] = "Hey";
    Value[Value["You"] = 6] = "You";
    Value[Value["Heyyy"] = 7] = "Heyyy";
    Value[Value["Left"] = 6] = "Left";
    Value[Value["Go"] = 7] = "Go";
})(Value || (Value = {}));
