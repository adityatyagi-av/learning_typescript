//Type Aliases 

type stringOrNumber = string | number

type stringOrNumberArray =(string | number)[]

type car={
    name?: string,
    racing: boolean,
    model: stringOrNumberArray
}
type UserId =stringOrNumber

// interface PostId =stringOrNumber


//Literal Types
let myName: 'Aditya'

let userName: 'Aditya' | 'Tyagi' | 'aadi'

userName='Aditya'

//function 

const add1=(car: car)=>{
    return car.name?.toUpperCase
}
const add =(a:number, b:number, c?:number):
 number=>{
    if(typeof c !== "undefined"){
        return a+b+c;
    }
    return a+b
}


const logMsg =(message: any): void=>{
    console.log(message)
}
logMsg('hey buddy')
logMsg(add(1,2))

function greet(person:string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()} !`)
}
greet('aditya',new Date());

let subtract = function (c:number,d:number):
number{
    return c-d
}
type mathFunction =(a:number,b:number)=> number

let multiply: mathFunction =(c,d)=>{
    return c*d
}

logMsg(multiply(2,2))
logMsg(subtract(2,6))

//optional parameters

const addAll=(a:(string|number)[] , b:number , c?:number)=>{
    if(typeof c !== 'undefined'){
        return b+c
    }
    else
    return a
}


//default parameters
const sumAll =(a:number=11,b:number,c:number =12)
:number=>{
    return a+b+c
}

logMsg(addAll(['sa',12,'aditya'],12))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined,12))

//Rest Parameters
const total =(a:number,...num: number[]):number=>{
    return a+num.reduce((prev,curr)=>prev-curr)
}

logMsg(total(2,12,1,12,42))


//never type explored
const createError =(errMsg: string):never=>{
    throw new Error(errMsg)
}

const infinite =()=>{
    let i:number=1
    while(true){
        i++
        if(i>100) break
    }
}

//custom guard
const isNumber=(value:number|string):boolean=>{
    return typeof value ==='number'
    ? true: false
}
const isString =(value:any):boolean=>{
    return typeof value==='string'
    ? true: false
}


//use of the never type
const numberOrString =(value:number|string):string=>{
    if(isString(value)) return 'string'
    if(isNumber(value)) return 'number'

    return createError('error never occured')
}