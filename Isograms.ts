// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function that 
// determines whether a string that contains only letters is 
// an isogram. Assume the empty string is an isogram. Ignore 
// letter case.

// export function isIsogram(str: string): boolean{
//     let cumulativeChecker: string = ""
//     for (let value = 0; value < str.length; value++){
//       if (!cumulativeChecker.includes(str[value].toLowerCase())){
//         cumulativeChecker += str[value].toLowerCase()
//       }
//       else {
//         return false
//       }
//     }
//     return true
//   }