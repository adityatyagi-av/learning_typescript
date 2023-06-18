// //Classes in JAVASCRIPT

// class Coder{
//     secondLang!: string
    
//     constructor(
//         public readonly name:string,
//         public music:string,
//         private age:number,
//         protected lang:string='Typescript'
//         )  {
//         this.name= name
//         this.music=music
//         this.age=age
//         this.lang=lang
//     }
//     public getAge(){
//         return `Hello, I'm ${this.age}`
//     }
// }

// const Aditya =new Coder('Aditya','Hip-Hop',20,'typescript')
// Aditya.music ='melody'
// console.log(Aditya.getAge())
// // console.log(Aditya.age)


// class WebDev extends Coder {
//     constructor(
//         public computer: string,
//         name:string,
//         music:string,
//         age:number
//         ){
//         super(name,music,age) //super must be provided before this 
//         this.computer=computer
//     }

//     public getLang(){
//         return `I write ${this.lang}`
//     }
// }
// const Vashu =new WebDev('hp','Vashu','Lofi',19)
// console.log(Vashu.getLang(),Vashu.getAge())




////////////////////////////////////////////


interface Musician{
    name:string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician{
    name:string
    instrument: string
    constructor(name: string,
        instrument: string){
            this.name=name
            this.instrument=instrument
        }

    play(action:string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}
const Page = new Guitarist('Aditya','violin')
console.log(Page.play('plays'))


///////////////////////////////////

//static - Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
//
class Peeps{
    static count:number =0

    static getCount():number{
        return Peeps.count
    }

    public id:number

    constructor(public name:string){
        this.name=name
        this.id=++Peeps.count
    }
}
const Tyagi =new Peeps('Aditya')
const Tyagi1 =new Peeps('Aditya')
const Tyagi2=new Peeps('Aditya')


console.log(Tyagi.id)
console.log(Peeps.getCount())


////////////////////////////////////


//getter and setter in TypeScript
class Bands{
    private dataState: string[]

    constructor(){
        this.dataState=[]
    }
    public get data(): string[]{
        return this.dataState
    }
    public set data (value: string[]) {
        if (Array.isArray (value) && value.every(el => typeof el === 'string')){
        this.dataState = value
        return
        } else throw new Error('Param is not an  array of strings')
    }
}

const MyBands =new Bands()
MyBands.data=['Adityaa','Tyagi']
console.log(MyBands.data)
MyBands.data=[...MyBands.data,'ZZ Top']
console.log(MyBands.data)
MyBands.data=['Van Halen']