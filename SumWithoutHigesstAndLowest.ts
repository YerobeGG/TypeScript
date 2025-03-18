// Sum all the numbers of a given array ( cq. list ), except 
// the highest and the lowest element ( by value, not by 
// index! ).
// The highest or lowest element respectively is a single 
// element at each edge, even if there are more than one with 
// the same value.

// export function sumArray(array:number[] | null) : number {
//     if (array === null || array.length <= 1){return 0} else{
//       array.sort((a, b) => a - b)
//       array.shift()
//       array.pop()
//       return array.reduce((sum, value) => sum + value, 0)
//     }
//   }