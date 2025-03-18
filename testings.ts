// BUCLE FOR SENCILLO

// let letras = [2, 5, 7, 9, 10]
// for (let base = 0; base < letras.length; base++){
//     console.log(letras[base])
// }

let start = "10.0.1.0"
let end = "10.0.0.10"
let convertListS = start.split(".").map(Number)
let convertListE = end.split(".").map(Number)
console.log(convertListS[0])
console.log(convertListS[1])
console.log(typeof convertListS[0])
if (convertListS[3] !== convertListE[3]){
    console.log(convertListE[3] - convertListS[3])
}
else if (convertListE[2] > convertListS[2]){
    convertListE[3] = 256
    console.log(convertListE[3] - convertListS[3]) 
}

