/////////////////////////////////////////////////
// 170. Converting and Checking Numbers
/////////////////////////////////////////////////

/*



console.log(23 === 23.0);

// (Base 10) 0 to 9 ........... 1/10 = 0.1 ........... 3/10 = 3.33333333
// (Binary - Base 2)  0 - 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt(2.3)); // 2

// the string must start with a number
console.log(Number.parseInt('30px')); // 30
// the second argument is the base
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e30', 10)); // NaN

console.log(Number.parseInt('2.5rem')); // 2

// Reading a value coming from the DOM or from CSS or out of a string
// values gets converted to numbers
console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseFloat('   2.5rem   ')); // 2.5

// using the function as global functions
console.log(parseInt('2.5rem')); // 2
console.log(parseFloat('2.5rem')); // 2.5

// (isNaN) check if a value is not a number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // false
console.log(Number.isNaN(23 / 0)); // false .. (Infinity)

// (isFinite) checking if a valuse is a real number, not a string
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20')); // true
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false .. (Infinity)

// (isInteger) checking if a valuse an integer
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger('20')); // false
console.log(Number.isInteger(+'20')); // true
console.log(Number.isInteger(+'20X')); // false
console.log(Number.isInteger(23 / 0)); // false .. (Infinity)


*/

/////////////////////////////////////////////////
// 171. Math and Rounding
/////////////////////////////////////////////////

/*


// square root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

// qubic root
console.log(8 ** (1 / 3)); // 2

// max
console.log(Math.max(5, 10, 23, 11, 2)); // 23
console.log(Math.max(5, 10, '23', 11, 2)); // 23
console.log(Math.max(5, 10, '23', '11px', 2)); // NaN

console.log(Math.min(5, 10, '23', 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

console.log(Math.ceil(Math.random() * 6));

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
// 0 .. 1 -> 0 ... (max - min) -> min ... (max - min + min) // min ... max

console.log(Array.from({ length: 100 }, () => randomInt(1, 6)));

// Rounding integers

console.log(Math.round(23.5)); //24
console.log(Math.round(23.4)); //23

console.log(Math.ceil(23.1)); //24
console.log(Math.ceil(23.5)); //24

console.log(Math.floor(23.5)); //23
console.log(Math.floor(23.9)); //23

console.log(Math.trunc(23.5)); //23

console.log(Math.trunc(-23.5)); //23 get's truncated
console.log(Math.floor(-23.9)); //24 it rounds down

// Rounding decimals
// to fixed returns a string not a number
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); // gets converted to number using type coercion


*/

/////////////////////////////////////////////////
// 172. The Remainder Operator
/////////////////////////////////////////////////
/*

console.log(5 % 2); // 5 = 2 * 2 + {1}
console.log(8 % 3); // 8 = 2 * 3 + {2}

const isEven = num => num % 2 === 0;
console.log(isEven(7)); // false
console.log(isEven(6)); // true
console.log(isEven(9)); // false

document.querySelector('.balance').addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
  });
});

*/

/////////////////////////////////////////////////
// 173. Numeric Separators (_)
/////////////////////////////////////////////////
/*

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1_415;

console.log(PI);

console.log(Number(`230000`));
console.log(Number(`230_000`)); // NaN -> not allowed to parse a text includes (_)


*/

/////////////////////////////////////////////////
// 174. Working with BigInt
/////////////////////////////////////////////////

/*


// normal number
console.log(2 ** 53 - 1); // 9,007,199,254,740,991
console.log(Number.MAX_SAFE_INTEGER); // 900,719,925,474,0991

// wrong percission
console.log(9150585848484564896135498997); //9.150585848484565e+27

// big int Number
console.log(9150585848484564896135498997n);

// Operations
console.log(9150585848484564896135498997n * 25578451n); // 234057811746755867452121950455313647n

const huge = 255897119898715456n;
const num = 23;

// console.log(huge * num); //Cannot mix BigInt and other types, use explicit conversions

console.log(huge * BigInt(num));

console.log(huge > num);

////// Math operations doesn't work on BigInt
// Divisions
console.log(11n / 3n); // it cuts the decimal places


*/

/////////////////////////////////////////////////
// 175. Creating Dates
/////////////////////////////////////////////////

// create a date

/*

// 1.
const now = new Date();

console.log(now);

// 2.
console.log(new Date('Apr 01 1988 14:30:00')); // Fri Apr 01 1988 14:30:00 GMT+0200
console.log(new Date('Apr 01 1988 14:30:00')); // Fri Apr 01 1988 14:30:00 GMT+0200

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0200 (Eastern European Standard Time)

console.log(new Date(0)); //Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 02:00:00 GMT+0200 (Eastern European Standard Time)





// working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);

console.log(future); // Thu Nov 19 2037 15:23:05 GMT+0200 (Eastern European Standard Time)

console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 -> November
console.log(future.getDate()); // 19 -> the day of the month
console.log(future.getDay()); // 4 (Thursday) -> the day of the week ->
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 5
console.log(future.toISOString()); // 2037-11-19T13:23:05.000Z
console.log(future.getTime()); // the number of milliseconds passed since 01 Jan 1970

console.log(new Date(1672247485000)); // Wed Dec 28 2022 19:11:25 GMT+0200

console.log(Date.now()); // the current time stamp now -> 1653865743019

future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:05 GMT+0200 (Eastern European Standard Time)


*/

/////////////////////////////////////////////////
// 177. Operations With Dates
/////////////////////////////////////////////////

/*


const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(+future);

const daysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const diff1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));

console.log(diff1);


*/

/////////////////////////////////////////////////
// 178. Internationalizing Dates (Intl)
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// 179. Internationalizing Numbers (Intl)
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// 180. Timers: setTimeout and setInterval
/////////////////////////////////////////////////
/*


// setTimeOut
const ingredients = ['olives', 'spinach'];

const pizzatimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here's your pizza 🍕 with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);

console.log(`Waiting ...`); // first to exicute Async

// cancel the timer, don't do anything with it
if (ingredients.includes('spinach')) clearInterval(pizzatimer);

// setInterval
setInterval(function () {
  const now = new Date();
  const time = new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  }).format(now);
  console.log(time);
}, 1000);


*/
