// Index Signatures

interface TransactionObj{
    readonly [index:string] : number
}

interface TransactionObj{
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj={
    Pizza:-10,
    Books:-5,
    Job:50,
    Aditya:233
}

console.log(todaysTransactions.Books)
console.log(todaysTransactions['Books'])

let prop:string='Pizza'
console.log(todaysTransactions[prop])


const todaysNet =(transactions: TransactionObj):number=>{
    let total =0
    for (const transaction in transactions){
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

// todaysTransactions.Booooks=20

console.log(todaysTransactions['aditya'])


//////////////////////////////////////////////////////


interface Student{
    // [key:string]: string|number|number[]|undefined
    name:string,
    GPA: number,
    classes?: number[]
}

const student: Student={
    name: 'Aditya',
    GPA: 7.65,
    classes:[100,299]
}

// console.log(student.test)

for (const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key =>{
    console.log(student[key as keyof typeof student])
})

const logStudentKey =(student: Student,key:keyof Student):void=>{
    console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student,'GPA')