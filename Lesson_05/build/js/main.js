"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; // less specific
console.log(b);
console.log(typeof (b));
let c = a; //more specific
console.log(c, typeof (c));
//different ways of using the type casting
let d = 'word';
let e = 23;
let f = 'hey';
console.log(d, typeof (d));
console.log(e, typeof (e));
console.log(f, typeof (f));
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
console.log(myVal, typeof (myVal));
//TypeScript sees no problem - but a string is returned in the below function
let nextVal = addOrConcat(2, 2, 'concat');
console.log(nextVal, typeof (nextVal));
//The DOM  
const img = document.querySelector('img');
const myImg = document.getElementById('img'); //to tell we know it's there
img.src;
myImg.src;
