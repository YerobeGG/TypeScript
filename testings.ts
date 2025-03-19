// BUCLE FOR SENCILLO

// let letras = [2, 5, 7, 9, 10]
// for (let base = 0; base < letras.length; base++){
//     console.log(letras[base])
// }


let list = [10, 20, 20, 30, 10]
let frequency: Record<number, number> = {};
for (let value of list){
    frequency[value] = (frequency[value] || 0) + 1;
}

console.log(frequency);
