// Greed is a dice game played with five six-sided dice. 
// Your mission, should you choose to accept it, is to 
// score a throw according to these rules. You will always 
// be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point


export function score(dice: number[]): number {
    // Create the dictionary to get the numbers and how many times it repeats
    let frequency: Record<number, number> = {};
    // Create a int to add the sum of the value of the numbers
    let totalSum: number = 0
    // Loop to define the numbers we have and how many times it repeats
    for (let value of dice){
      frequency[value] = (frequency[value] || 0) + 1;
  }
    // Assign the value of that number and eliminate the register so it not generate a loop || Just the triplets
    if (frequency[1] >= 3){totalSum += 1000; frequency[1] -= 3};
    if (frequency[6] >= 3){totalSum += 600; frequency[6] -= 3};
    if (frequency[5] >= 3){totalSum += 500; frequency[5] -= 3};
    if (frequency[4] >= 3){totalSum += 400; frequency[4] -= 3};
    if (frequency[3] >= 3){totalSum += 300; frequency[3] -= 3};
    if (frequency[2] >= 3){totalSum += 200; frequency[2] -= 3};
    
    // Now the same but with lone numbers
    totalSum += (frequency[1] || 0) * 100;
    totalSum += (frequency[5] || 0) * 50;
    
    return totalSum;
}