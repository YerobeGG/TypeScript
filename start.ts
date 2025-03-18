// Variables

console.log("Buenas tardes") // console.log es el equivalente al print en typescript

// Asignamos mensaje como variable y definimos al lado el valor de esa variable

// var mensaje = 'Esto es un string'

// Con el let nos deja a acceder a ella y modificarla nuevamente como vemos en el ejemplo de abajo
let mensaje2 = 'Esto es otro string'
mensaje2 = 'Este es un mensaje diferente'
console.log(mensaje2)

console.log(typeof mensaje2) // Con typeof podemos ver el tipo de variable que es

let myNumeros = 1 // Podemos asignar variables como integrers
myNumeros = myNumeros + 10 // Podemos sumar de este modo
console.log(myNumeros - 1) // Podemos seguir operando en el console log

console.log(mensaje2 + ' ' + myNumeros) // Esto es algo raro ya que sumas str con num
let test1 = mensaje2 + ' ' + myNumeros
console.log(typeof test1) // Como podemos apreciar aqui, el tipo de esta suma es string

let float = 6.5
let nonfloat = 6
console.log(typeof float, typeof nonfloat) // No existe como tal el float en TypeScript, ambos son number
console.log(float + nonfloat) // Vemos que no da ningun error el sumar ambos

let myBool = true // Tipo boleano true o false
console.log(myBool)

let myUndefined = undefined // Asignamos valor por defecto a undefined
myUndefined = 1 // Aunque el compilador me de error si que funciona cambiar el undefined a otro valor
console.log(myUndefined)

// Constantes

const neverChange = 7

// Condicionales

myNumeros = 19
let myCadena = 'Hol'
if (myNumeros < 18 && myCadena == 'Hol') { // && -> si ambas se cumplen
    console.log('Es menor de edad')
} else if (myNumeros == 18 || myCadena == 'aloH'){ // || -> uno u otro
    console.log('Es justo mayor de edad')
} else if (myNumeros > 18){
    console.log('Es mayor de edad')
}

// Funciones
/*
function myVoidFunction(): void{ // -> Con void hacemos que esta funcion no retorne nada
}
*/

function myFunction() {
    console.log('Mi primer función')
}

myFunction() // -> Al contario que en Python solo necesitamos poner la funcion() para que devuelva el valor

// console.log(myFunction()) // -> Esto también funciona pero retornara también un undefind al final

function sumNumber(firstNumb, secondNumb){
    return firstNumb + secondNumb
}

console.log(sumNumber(6, 5))

// Listas

let myList = ["Pan", "Queso", "Jamon"] // -> Asi se crea un Array Lista
myList.push("Turron") // -> Asi se añade al final de la lista
console.log(myList)

// Bucles
let myPhrase = 'Hola, que tal'
for (const value of myPhrase){
    console.log(value)
} 

// let myCount = 0
// let objetiveNumber = 123456789
// let convertNumbers = "123456"
// for (const value of convertNumbers){
//     if (typeof value == )

// }