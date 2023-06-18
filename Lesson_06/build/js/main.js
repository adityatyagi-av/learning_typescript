"use strict";
//Classes in JAVASCRIPT
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Aditya = new Coder('Aditya', 'Hip-Hop', 20, 'typescript');
Aditya.music = 'melody';
console.log(Aditya.getAge());
// console.log(Aditya.age)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); //super must be provided before this 
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Vashu = new WebDev('hp', 'Vashu', 'Lofi', 19);
console.log(Vashu.getLang(), Vashu.getAge());
