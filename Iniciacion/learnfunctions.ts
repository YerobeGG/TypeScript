function addDefinedNums(firstnum: number, secondnum: number){
    return firstnum + secondnum
}

console.log(addDefinedNums(10, 20))


function addNum2(num: number){
    return num + 2
}

console.log(addNum2(10))

function toUpeer(value: string){
    return value.toUpperCase()
}

console.log(toUpeer('hola, buenas tardes'))


function checkAge(age: number){
    if (age >= 18)
        console.log("Es mayor de edad")
    else
        console.log("No es mayor de edad")
}

checkAge(8)