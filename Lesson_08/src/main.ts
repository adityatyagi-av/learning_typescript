const echo =<T>(arg: T): T=> arg

const isObj=<TEr>(arg: TEr): boolean=>{
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !==null )
}
console.log(isObj(true));
console.log(isObj({aditya:'13'}))
console.log(isObj("get"))
console.log(isObj([12,"adds"]))

const isTrue =<T>(arg: T): {arg:T, is: boolean}=>{
    if(Array.isArray(arg) && !arg.length){
        return {arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {
            arg,
            is: false
        }
    }

    return {
        arg,
        is: !!arg
    }
}

console.log(isTrue(false))
console.log(isTrue(0))

interface HasID {
    id : number
}