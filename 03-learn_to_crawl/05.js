/**
 * Create these variables containing strings:
 *      1. One with your name.
 *      2. One with a greeting like "Good day to you".
 *      3. One with a friend's name.
 *      4. One with a family member's name.
 *      5. One with the number of today's date.
 *      6. One with the name of today's month.
 *      7. One with the number of today's year.
 *      8. One with your age.
 * 
 * Using the variables created, with both concatenation and interpolation use
 * console.log to output:
 *      1. A greeting to your friend
 *      2. A greeting to your family member
 *      3. A greeting to your friend stating today's date and month
 *      4. A sentence that says something along the lines of "In 20 years I will
 *         be XXX years old". For this, don't use any more variables. That is,
 *         make your script calculate the age with the variable you already have
 *         that contains the year.
 *
 * Do all of these with both concatenation and interpolation. Which do you
 * prefer? Its good to get practice with both because there are some situations
 * in which interpolation won't work, seeing as it's a relatively new method and
 * support for it is not everywhere.
 */

let name = "Mike";
let greeting = "Good day to you";
let friend = "Alex";
let wife = "Mariana";
let today_date = 22;
let month = "September";
let year = 2023;
let age = 42;

console.log(greeting + " " + friend);
console.log(greeting + " " + wife);
console.log(greeting + " " + friend + " " + today_date + " " + month);
console.log("In 20 years I wil be" + " " + (age + 20) + " " + "years old"); 


