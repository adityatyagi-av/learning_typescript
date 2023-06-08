//working with the arrays
let stringArr =['one','two','hey']
let guitars =['Strat','Les Paul',5150]
let mixedData=[false,'evh',129,true]
stringArr[0]='Aditya'
stringArr.push('Tyagi')

guitars[0]=12
guitars.unshift('Strat')
 let test=[]
 let band: string[]=[]
 band.push('Tyagi')
console.log(typeof(band))
//Tuples
let myTuple: [string,number,boolean] =['Aditya Tyagi',21,true]

myTuple[1]=12

//Objects in TypeScript
let myObj: Object
myObj=[]
console.log(typeof myObj)

myObj =myTuple

myObj={}

const exampleObject ={
    prop1: 'aditya',
    prop2: true,
}
//to create any type we used the type
type Guitarist = {
    name: string,
    active?: boolean,  // ? is to make this optional
    albums: (string | number)[]
}
let evh: Guitarist ={
    name: "Aadi",
   
    albums: [2025,'aadi','I'],
    active: true,
}

let jb={
    name: 'Tyagi',
    albums: [2006,'Dawood'],
    
}
evh =jb
console.log(jb)
console.log(typeof(jb));
console.log(typeof(evh))
const greetGuitarist =(guitarist: Guitarist)=>{ //parameters set here and passed
    return `Hello ${guitarist.name}!`
}
console.log(greetGuitarist(evh))
//Using Interface
interface boy{
    name?: string,
    age: number,
    male: boolean,
}
interface boy{
    address: (string|number)[]
}
let hey1: boy={
    name: 'aditya',
    age: 21,
    male: true,
    address: [12],

}
const greetBoy=(boytype: boy)=>{
   return `hello boy ${boytype.name?.toLowerCase}`
}
//Enums - Enums allow to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.Typescript provides both numeric and string-based enums.

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right =""
  }

  enum Value{
    Up,
    Down=2,
    Right,
    None,
    Hey,
    You,
    Heyyy,
    Left=6,
    Go
  }