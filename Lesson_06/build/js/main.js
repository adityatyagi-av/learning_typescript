"use strict";
// //Classes in JAVASCRIPT
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Aditya', 'violin');
console.log(Page.play('plays'));
///////////////////////////////////
//static - Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
//
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Tyagi = new Peeps('Aditya');
const Tyagi1 = new Peeps('Aditya');
const Tyagi2 = new Peeps('Aditya');
console.log(Tyagi.id);
console.log(Peeps.getCount());
////////////////////////////////////
//getter and setter in TypeScript
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an  array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Adityaa', 'Tyagi'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Halen'];
