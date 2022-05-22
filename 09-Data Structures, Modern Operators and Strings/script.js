'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  rname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    const { starterIndex = 1, mainIndex = 0, time = '20:00', address } = obj;
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]}, will be delivered to ${address}, at ${time}`
    );
  },

  orderPasta: function (arg1, arg2, arg3) {
    console.log(`Here is your pasta with ${arg1}, ${arg2}, ${arg3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/////////////////////////////////////////
// Destructuring Arrays
/////////////////////////////////////////

/*
const arr = [2, 3, 4];

const a = arr[0]; // get the first element
const b = arr[1]; // get the second element
const c = arr[2]; // get the thrid element

// alternative way
const [x, y, z] = arr; // get the first,second, and thrid element

const [first, second] = restaurant.categories; // we may distruct some/art of the array

// switching values
const totals = [100, 200];
let [main, secondary] = totals; // 100 , 200

// old solution
// let tempVal = main;
// main = secondary;
// secondary = main;

// ES6 solution / reassigning the variables
[main, secondary] = [secondary, main];

console.log(main, secondary); // 200 , 100

//
const [firstDish, mainDish] = restaurant.order(2, 0);

console.log(firstDish, '-', mainDish);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 , 9 , undefinded
const [l = 1, m = 1, n = 1] = [8, 9];
console.log(l, m, n); // 8 , 9 , 1

*/

/////////////////////////////////////////
// 104. Destructuring Objects
/////////////////////////////////////////

/*

const { rname, openingHours, categories } = restaurant;
console.log(name, openingHours);

// renaming variables while destructuring
const { rname: restaurantName, openingHours: hours } = restaurant;

console.log(restaurantName, hours);

// setting default values in case data doesn't exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // we now overrite values for "a" and "b"

//object inside object / nested objects
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

*/

/////////////////////////////////////////
// 105. The Spread Operator (...)
/////////////////////////////////////////

/*


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr];
console.log(newArr); // [[1, 2, 7, 8, 9]
console.log(...newArr); // 1 2 7 8 9

const newMenu = [restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto']

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Ammar';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt(`Let's make pasta!
// Ingredient 1?`),
//   prompt(`Let's make pasta!
// Ingredient 2?`),
//   prompt(`Let's make pasta!
// Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients);

// Objects
const newResturant = { founder: 'Ammar Sayed', foundedIn: 1998 };

// create a shallow copy of the original resturant
const restaurantCopy = { ...restaurant };
restaurantCopy.rname = 'Risturant Roma';


*/

/////////////////////////////////////////
// 106. Rest Pattern and Parameters / always will be the last element of an array
/////////////////////////////////////////
/*


// 1) destructurting
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
// rest parameter, is packing the arguments into an array
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3, 4);
add(8, 0, 2, 5, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mashrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mashrooms');


*/

/////////////////////////////////////////
// 107. Short Circuiting (&& and ||)
/////////////////////////////////////////
/*


// use ANY data type, return ANY data type, short-circuiting

// ---- OR Operator -----
console.log('--------- OR -------------');

console.log(3 || 'Ammar'); // 3
console.log('' || 'Ammar'); // "Ammar"
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // "Hello"

//const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// the OR operator will result to 10 if the numGuests is falsy value
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;

console.log(guests); // 10

// ---- AND Operator -----
console.log('--------- AND -------------');
// checks all truthy values till the end or finds a falsy value and stops and disregards the rest of the evaluation and return
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Ammar'); // null

// practical example
// check if the function exists, then do somthing
if (restaurant.orderPizza) {
  restaurant.orderPizza('mashroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

*/

/////////////////////////////////////////
// 108. The Nullish Coalescing Operator (??)
/////////////////////////////////////////
/*


// the OR operator will result to 0 if the numGuests is null and undefined (NOT 0 or "")
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests ?? 10;
console.log(guests2); // 0

*/

/////////////////////////////////////////
// 109. Logical Assignment Operators
/////////////////////////////////////////
/*


const rest1 = { rname: 'Capri', numGuests: 0 };
const rest2 = { rname: 'La Piazza', owner: 'Ammar S.' };

// OR assignment operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // 10
// rest2.numGuests ||= 10; // 10

// NULLISH assignment operator

// rest1.numGuests = rest1.numGuests ?? 10; // 0
// rest2.numGuests = rest2.numGuests ?? 10; // 10
// rest1.numGuests ??= 10; // 0
// rest2.numGuests ??= 10; // 10

// AND assignment operator
// rest1.onwer = rest1.onwer && '<ANONYMOS>';
// rest2.onwer = rest2.onwer && '<ANONYMOS>';
rest1.owner &&= '<ANONYMOS>'; // replace the name if truthy
rest2.owner &&= '<ANONYMOS>'; // replace the name if truthy

console.log(rest1); // 0
console.log(rest2); // 10


*/

/////////////////////////////////////////
// 110. Coding Challenge #1, in a separated file
/////////////////////////////////////////

/////////////////////////////////////////
// 111. Looping Arrays: The for-of Loop
/////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// in case i need the current index

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// or much better using destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
