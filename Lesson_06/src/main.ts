//Classes in JAVASCRIPT

class Coder{
    secondLang!: string
    
    constructor(
        public readonly name:string,
        public music:string,
        private age:number,
        protected lang:string='Typescript'
        )  {
        this.name= name
        this.music=music
        this.age=age
        this.lang=lang
    }
    public getAge(){
        return `Hello, I'm ${this.age}`
    }
}

const Aditya =new Coder('Aditya','Hip-Hop',20,'typescript')
Aditya.music ='melody'
console.log(Aditya.getAge())
// console.log(Aditya.age)


class WebDev extends Coder {
    constructor(
        public computer: string,
        name:string,
        music:string,
        age:number
        ){
        super(name,music,age) //super must be provided before this 
        this.computer=computer
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}
const Vashu =new WebDev('hp','Vashu','Lofi',19)
console.log(Vashu.getLang(),Vashu.getAge())