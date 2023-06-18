type One =string
type Two =string | number
type Three = 'helloww'

//convert to more or less specific

let a:One='hello'
let b= a as Two // less specific
console.log(b)
console.log(typeof(b))

let c =a as Three //more specific
console.log(c,typeof(c))

//different ways of using the type casting

let d =<One>'word'
let e=<string|number>23
let f=<Three>'hey'
console.log(d,typeof(d))
console.log(e,typeof(e))
console.log(f,typeof(f))

const addOrConcat = (a: number,b:number,c:'add'|'concat'): number | string =>{
    if(c==='add') return a+b
    return ''+a+b
}

let myVal: string =addOrConcat(2,2,'concat') as string
console.log(myVal,typeof(myVal))


//TypeScript sees no problem - but a string is returned in the below function
let nextVal: number =addOrConcat(2,2,'concat') as number
console.log(nextVal,typeof(nextVal))


//The DOM  
const img =document.querySelector('img')!
const myImg=document.getElementById('img') as HTMLImageElement //to tell we know it's there

img.src
myImg.src