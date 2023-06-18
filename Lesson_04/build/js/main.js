"use strict";
//Type Aliases 
// interface PostId =stringOrNumber
//Literal Types
let myName;
let userName;
userName = 'Aditya';
//function 
const add1 = (car) => {
    var _a;
    return (_a = car.name) === null || _a === void 0 ? void 0 : _a.toUpperCase;
};
const add = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('hey buddy');
logMsg(add(1, 2));
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()} !`);
}
greet('aditya', new Date());
let subtract = function (c, d) {
    return c - d;
};
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
logMsg(subtract(2, 6));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return b + c;
    }
    else
        return a;
};
//default parameters
const sumAll = (a = 11, b, c = 12) => {
    return a + b + c;
};
logMsg(addAll(['sa', 12, 'aditya'], 12));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 12));
//Rest Parameters
const total = (a, ...num) => {
    return a + num.reduce((prev, curr) => prev - curr);
};
logMsg(total(2, 12, 1, 12, 42));
//never type explored
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
const isString = (value) => {
    return typeof value === 'string'
        ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (isString(value))
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('error never occured');
};
