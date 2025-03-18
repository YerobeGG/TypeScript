 /*You probably know the "like" system from Facebook and other pages. People can 
"like" blog posts, pictures or other items. We want to create the text that should 
be displayed next to such an item.
Implement the function which takes an array containing the names of people that 
like an item. It must return the display text as shown in the examples:


export const likes = (a : string[]) : string => {
  let participants: number = a.length
  if (participants < 1){return "no one likes this"}
  if (a.length === 1){return `${a[0]} likes this`}
  if (a.length === 2){return `${a[0]} and ${a[1]} like this`}
  if (a.length === 3){return `${a[0]}, ${a[1]} and ${a[2]} like this`}
  if (a.length === 4){return `${a[0]}, ${a[1]} and 2 others like this`}
  else {
    let calNum = participants - 2
    return `${a[0]}, ${a[1]} and ${calNum} others like this`
  }
}
*/