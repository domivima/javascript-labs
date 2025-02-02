/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let m = 4856;
let n = 8574;
let i = 9285;
let luckyNumber = 7

let sum = m + n + i + luckyNumber;
console.log("sum", sum)

let sub = i - luckyNumber - m;
console.log("substruction", sub)

let mult = m * n * i * luckyNumber;
console.log("multiplication", mult)

let calc = i / (m - luckyNumber);
console.log("division", calc)

let remainder = sum % luckyNumber;
console.log("modulo", remainder)
