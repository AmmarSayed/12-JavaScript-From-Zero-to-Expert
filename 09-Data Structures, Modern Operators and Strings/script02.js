'use strict';

/////////////////////////////////////////
// 112. Enhanced Object Literals
/////////////////////////////////////////

const weekdays = ['mon', 'tu', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
  // we can compute the property name 😃
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[4]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  rname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // alternative ES6 methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(obj) {
    const { starterIndex = 1, mainIndex = 0, time = '20:00', address } = obj;
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]}, will be delivered to ${address}, at ${time}`
    );
  },

  orderPasta(arg1, arg2, arg3) {
    console.log(`Here is your pasta with ${arg1}, ${arg2}, ${arg3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
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

  // hours:hours

  // alternative way for ES6
  hours,
};

/////////////////////////////////////////
// 113. Optional Chaining (?.)
/////////////////////////////////////////
/*


// console.log(restaurant.openingHours.mon.open); //Uncaught TypeError: Cannot read properties of undefined (reading 'open')

// if the property before the question mark exist (NOT null and not undefined), read the next property, else return undefined
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tu', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open;
  open ? console.log(`On ${day}, we open at ${open}`) : console.log(`On ${day}, we are closed!`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Ammar', email: 'non@non.com' }];

console.log(users[0]?.name ?? 'user Array is empty');

*/

/////////////////////////////////////////
// 114. Looping Objects: Object Keys, Values, and Entries
/////////////////////////////////////////
/*

// Property NAMES
const properties = Object.keys(hours);
console.log(properties);
let openStr = `We are open on ${properties.length} days:`;
for (const day of Object.keys(hours)) {
  openStr += ` ${day},`;
}
console.log(openStr);

// Property VALUES
const values = Object.values(hours);
console.log(values);

// Property ENTRIES
const entries = Object.entries(hours);
console.log(entries);

for (const x of entries) {
  const [day, { open, close }] = x;
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

*/

/////////////////////////////////////////
// 115. Coding Challenge #2 // in a separated file
/////////////////////////////////////////

/////////////////////////////////////////
// 116. Sets
/////////////////////////////////////////
/*

const orderSet = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta']);
console.log(orderSet); // {'pasta', 'pizza', 'risotto'}
console.log(orderSet.size); // 3
console.log(orderSet.has('pizza')); // true
console.log(orderSet.has('Pizza')); // false
console.log(orderSet.has('Bread')); // false

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('risotto');
console.log(orderSet); // {'pasta', 'pizza', 'Garlic Bread'}

// there's no way to get data out of a set
// if you need to get data out of it, you just need an array instead
// sets are iterables
for (const order of orderSet) console.log(order);

// remove doublicate from an array
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const stafUnique = [...new Set(staff)]; // ['waiter', 'chef', 'manager']
console.log(stafUnique);
console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size);
console.log(new Set('Ammar').size);

*/

/////////////////////////////////////////
// 117. Maps: Fundamentals
/////////////////////////////////////////
/*

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firanze, Italy');

console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('  categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name')); // Classico Italiano

console.log(rest.get(true)); // we are open

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);

const myArrKey = [1, 2];
rest.set(myArrKey, 'Test');

console.log(rest.get(myArrKey));
*/

/////////////////////////////////////////
// 118. Maps: Iteration
/////////////////////////////////////////

/*


const question = new Map([
  ['question', "Whats' the best programming language in the world?"],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct answer! 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// convert object to Map
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

// iteration
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
console.log(question.get(answer === question.get('correct')));

// conver map to an array

console.log([...question]);
// console.log(question.entries());
console.log(question.keys());
console.log(question.values());

*/

/////////////////////////////////////////
//119. Summary: Which Data Structure to Use?
/////////////////////////////////////////

/////////////////////////////////////////
//120. challange #3 in a separated video
/////////////////////////////////////////

/////////////////////////////////////////
//121. Working With Strings - Part 1
/////////////////////////////////////////

/*



const airline = 'Egypt Air';
const plan = 'A320';

console.log(plan[0]); // A
console.log(plan[1]); // g
console.log(plan[2]); // y
console.log('B737'[0]); // B

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(4)); // string methods doesn't mutate the original string
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' '))); // "Egypt"
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // "Air"
console.log(airline.slice(-2));
const checkMiddleSeat = function (str) {
  // B and E are middle seats
  // const s = str.slice(-1);
  const s = str.at(-1);
  console.log(s === 'B' || s === 'E' ? 'Middle Seat' : 'Window Seat');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('2E');


*/

/////////////////////////////////////////
//122. Working With Strings - Part 2
/////////////////////////////////////////

/*


const airline = 'Egypt Air';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// FIX capitalizaion in a name
const passengr = 'AmMaR';
const passengrLower = passengr.toLowerCase();
const passengerCorrect = passengrLower[0].toUpperCase() + passengrLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@ammar.com';
const loginEmail = '   Hello@AMMAR.cOM \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email); // true

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = `All Passengers come to boarding door 23. Boarding door 23!`;

console.log(announcement.replaceAll('door', 'gate'));
//using regex
console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of the new Airbus family');

// practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) console.log('Not allowed to board');
  else console.log('Welcome aboard');
};
checkBaggage('I have a laptop, some food and pocket Knife');
checkBaggage('socked, camera');
checkBaggage('Got some snacks and a gun for protection');



*/

/////////////////////////////////////////
//123. Working With Strings - Part 3
/////////////////////////////////////////

/*


console.log('a+b+c+d+e+nice+string'.split('+'));
console.log('Ammar Sayed'.split(' '));
const [fname, lname] = 'Ammar Sayed'.split(' ');

const newName = ['Mr.', fname, lname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = name => {
  const splitted = name.toLowerCase().split(' ');
  const newName = [];

  // for (const [fLitter, ...remaining] of splitted) {
  //   newName.push([fLitter.toUpperCase(), ...remaining].join(''));
  // }

  // another solution
  for (const n of splitted) {
    // newName.push(n[0].toUpperCase() + n.slice(1));

    // another solution
    newName.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(newName.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('ammar sayed');

// padding a string

const message = ' Go to age 23';

console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Ammar Sayed'.padStart(25, '+').padEnd(35, '+'));

const maskCreidtCard = function (number) {
  const str = number + ''; // converting number to string implicitly
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};

maskCreidtCard(450005);
maskCreidtCard(4500058);
maskCreidtCard(4500054887888787);
maskCreidtCard('3365998951057897');

// Repeat
const message2 = `Bad weather... All Departures Delayed...`;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(25);
planesInLine(12);


*/

/////////////////////////////////////////
//124. Coding Challenge #4 in a separated file
/////////////////////////////////////////

/////////////////////////////////////////
//124. Coding Challenge #4 in a separated file
/////////////////////////////////////////

/////////////////////////////////////////
//125. String Methods Practice
/////////////////////////////////////////

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = txt => txt.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [status, fromC, toC, atTime] = flight.split(';');
  const tempStatus = status.replaceAll('_', ' ').trim();

  const str1 = `${tempStatus.split(' ')[0] === 'Delayed' ? `🔴 ${tempStatus}` : tempStatus} from ${getCode(
    fromC
  )} to ${getCode(toC)} (${atTime.split(':').join('h')})`;

  console.log(str1.padStart(45));
}

// output
/*
 🔴 Delayed Departure from FAO to TXL (11h25)
              Arrival from BRU to FAO (11h45)
    🔴 Delayed Arrival from HEL to FAO (12h05)
             Departure from FAO to LIS (12h30)
*/
