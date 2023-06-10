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