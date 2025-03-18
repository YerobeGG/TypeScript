// Write a function to convert a name into initials. This kata
// strictly takes two words with one space in between them.
// The output should be two capital letters with a dot 
// separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


// export function abbrevName(name: string): string {
//     name = name.replace(/ /g, ".")
//     let nameDivider = name.split(".")
//     let nameLetter = nameDivider[0][0].toUpperCase()
//     let surnameLetter = nameDivider[1][0].toUpperCase()
//     return `${nameLetter}.${surnameLetter}`;
// }