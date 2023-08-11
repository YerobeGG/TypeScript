function addDefinedNums(firstnum: number, secondnum: number): number{
    return firstnum + secondnum
}

console.log(addDefinedNums(10, 20))


function addNum2(num: number): number{
    return num + 2
}

console.log(addNum2(10))

function toUpeer(value: string): string{
    return value.toUpperCase()
}

console.log(toUpeer('hola, buenas tardes'))

function checkAge(age: number): string{
    if (age >= 18)
        return "Es mayor de edad"
    else
        return "No es mayor de edad"
}

console.log(checkAge(18))

const food = ["apple", "carrot", "bread", "pizza", "pasta"]

food.map(food => {
    return "food like ${food}"
})
