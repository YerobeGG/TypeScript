// ATM machines allow 4 or 6 digit PIN codes and PIN codes 
// cannot contain anything but exactly 4 digits or exactly 6 
// digits.
// If the function is passed a valid PIN string, return true, 
// else return false.

// export class Kata {static validatePin(pin: string): boolean {
//     let validArguments: string = '0123456789'
//     for (let value = 0; value < pin.length; value++){
//       if (!validArguments.includes(pin)){
//         return false
//       }
//     }
//     if (pin.length === 4 || pin.length === 6){
//       return true
//     }
//     return false
//     }
//   }