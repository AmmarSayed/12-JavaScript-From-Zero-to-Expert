////////////////////////////////////
////////////////////////////////////
// LECTURE: Values and Variables
////////////////////////////////////
////////////////////////////////////

/*
let js = 'amazing';
if (js === 'amazing') {
  // console.log('JavaScript is Fun!');
}

// console.log(40 + 8 + 23 - 10);

// Variable name convention
let firstName = 'Ammar';
let $function = 27;

let person = 'Ammar';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJon = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

// console.log(myFirstJob);

*/

////////////////////////////////////
//Practice  LECTURE: Values and Variables */
////////////////////////////////////

/*
let country = 'Egypt';
let coninent = 'Africa';
let population = 100000000;
*/

// console.log(country, coninent, population);

////////////////////////////////////
////////////////////////////////////
// LECTURE: Data Types
////////////////////////////////////
////////////////////////////////////

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Ammar');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
////////////////////////////////////
////////////////////////////////////
// LECTURE: 13. let, const and var
////////////////////////////////////
////////////////////////////////////

/*

let age = 30;
age = 31;

//not allowed
// const job ;
var job = 'teacher';
job = 'programmer';

//the below is prohipited as JavaScript will create a variable in the global scope which might case errors
// we should always use let/const for variable declarations
lastName = 'Ammar';

console.log(lastName);

*/

////////////////////////////////////
////////////////////////////////////
// LECTURE: 14. Basic Operators
////////////////////////////////////
////////////////////////////////////
/*
const now = 2037;
const ageAmmar = now - 1988;
const ageSarah = now - 2018;
console.log(ageAmmar, ageSarah);

// (2 ** 3) means 2 to the power of 3 ...  2 * 2 * 2
console.log(ageAmmar * 2, ageAmmar / 10, 2 ** 3);

const firstName = 'Ammar';
const lastName = 'Sayed';
console.log(firstName + ' ' + lastName);

// (=) is an operator
// (+) is an operator
let x = 10 + 5; //15

x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 4; // x = x / 4 = 25
x++; // x = x + 1 = 26
x--; // x = x - 1 = 25

console.log(x); // 25

//comparison operators (> , < , >=, <=), returns ture/false values
console.log(ageAmmar < ageSarah); // false
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);

*/
////////////////////////////////////
////////////////////////////////////
// LECTURE: 15. Operator Precedence
////////////////////////////////////
////////////////////////////////////

/*
const now = 2037;
const ageAmmar = now - 1988;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2019);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // 10

const averageAge = (ageAmmar + ageSarah) / 2;
console.log(ageAmmar, ageSarah);
console.log('Average age = ', averageAge);
*/
