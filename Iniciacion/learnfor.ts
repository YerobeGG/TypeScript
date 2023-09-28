// First stage of loop for, this one is looks like python version as its more easy to read

let phrase: string = "hola123,.:"

for (let c of phrase) {
   console.log(c)
}

// Other way of loop for, this one is more "TypeScript" type.
// "let num:number = 1" declares the variable where we are gona work
// After that "num<11" will mark the limit where we want to stop working
// And finally "num++" is the thing we want to do at the end of each loop

for(let num:number = 1;num<11; num++){
   if (num%2 == 0){
      console.log(num, "is pair")
   }
}