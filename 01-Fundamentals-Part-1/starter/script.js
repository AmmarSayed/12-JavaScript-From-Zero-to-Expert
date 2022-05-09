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
////////////////////////////////////
////////////////////////////////////
// LECTURE: 16. Coding Challenge #1 in a separated file
////////////////////////////////////
////////////////////////////////////

////////////////////////////////////
////////////////////////////////////
// LECTURE: 17. Strings and Template Literals
////////////////////////////////////
////////////////////////////////////

/*
const firstName = 'Ammar';
const job = 'teacher';
const birthYear = 1988;
const year = new Date().getFullYear();

const ammar = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;

console.log(ammar);
console.log(`Hello world`);

console.log(`Starging
with multible
lines`);
*/

////////////////////////////////////
////////////////////////////////////
// 18. Taking Decisions: if / else Statements
////////////////////////////////////
////////////////////////////////////

/*
const age = 15;
const isOldEnough = age >= 18; // ture/false

if (isOldEnough) {
  console.log(`You are okay to have the licence, you can start driving 🚗`);
}

if (!isOldEnough) {
  console.log(`You cannot drive now, wait for another ${18 - age} years.`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

////////////////////////////////////
////////////////////////////////////
// 19. Coding Challenge #2 in a spearated file
////////////////////////////////////
////////////////////////////////////

////////////////////////////////////
////////////////////////////////////
// 20. Type Conversion and Coercion
////////////////////////////////////
////////////////////////////////////

/*

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('ammar') + 18);
//NaN is an invalid number
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
// it happens automatically whenver javascript is dealing with different type of values
// below the number is converted to a string automatically, because of the (+) operator
console.log(`I'm ` + 23 + ' years old');

// the (-) operatore converts strings to number automatically
console.log('23' - 10 - 3);

// in the below example (+) operator converts 10 to string, and concatinate it with 23, so it becomes 2310
console.log('23' + 10 - 3);

// (/) operator converts the string '23' to a number
console.log('23' / 2);
// (*) operator converts the string '23' to a number
console.log('23' * 2);

//gues the output
let n = '1' + 1; // '11'
n = n - 1; // 10

console.log(n);

*/
////////////////////////////////////
////////////////////////////////////
// 21. Truthy and Falsy Values
////////////////////////////////////
////////////////////////////////////

/*
// falsy valuse are values that will be evaluated to false when we try to convert them to boolean, such as
// 0, '', undefined, null, NaN
console.log(Boolean(0)); // converting 0 to boolean => false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // empty string is converted to false
console.log(Boolean('Ammar')); // normal string converted to true
console.log(Boolean({})); // an object is true, even if it's empty

// we usually don't use Boolean function for conversion, it happens generally using type coercion in 2 scenarios
//1- when using logical operators (>,<,||,<=,===,>=)
//2- In a logical context like an if statement

const money = 0;

if (money) {
  // money is a number, which is in the same time falsy because it's 0, so the second condition will be exicuted
  console.log(`Don't spend it all!`);
} else {
  console.log(`You should get a job!`);
}

let height; // height is undefinded which holds no valus, so it's falsy
height = 0; // height now holds a value of 0, which's also a falsy value

if (height) console.log('yaaay, height is defined');
else console.log('please define the height first');

*/
////////////////////////////////////
////////////////////////////////////
// 22. Equality Operators: == vs. ===
////////////////////////////////////
////////////////////////////////////

/*
const age = 18;
// the equality/comparison operator converts the value into boolean value
if (age === 18) console.log('You just became an adult');

const favourite = Number(prompt("What's your favourite number?"));

console.log(typeof favourite); //string

if (isNaN(favourite)) {
  console.log('please enter a valid number');
} else if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else {
  console.log('number is not 23 or 7');
}

*/
////////////////////////////////////
////////////////////////////////////
// 23. Boolean Logic
////////////////////////////////////
////////////////////////////////////

////////////////////////////////////
////////////////////////////////////
// 24. Logical Operators
////////////////////////////////////
////////////////////////////////////

/*

let hasDriversLicense = true;
let hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision); // true

hasDriversLicense = true;
hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision); // false

hasDriversLicense = true;
hasGoodVision = false;
console.log(hasDriversLicense || hasGoodVision); // true

console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) console.log('Sarah is able to drive');
else console.log('Someone else should drive...');

*/
////////////////////////////////////
////////////////////////////////////
// 25. Coding Challenge #3 , in a separate file
////////////////////////////////////
////////////////////////////////////

////////////////////////////////////
////////////////////////////////////
// 25. Coding Challenge #3 , in a separate file
////////////////////////////////////
////////////////////////////////////
