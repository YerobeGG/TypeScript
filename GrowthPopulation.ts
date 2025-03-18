// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants 
// (** number of inhabitants is an integer **)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.

// export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
//     let defaultValue: number = p0
//     let yearsToReach: number = 0
//     for (yearsToReach = 0; defaultValue < p; yearsToReach++){
//       let yearAugmenter = (defaultValue*(percent / 100))
//       defaultValue = Math.floor(defaultValue += yearAugmenter + aug)
//     }
//     return yearsToReach
//   }