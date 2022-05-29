'use strict';

// Data

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//144. Looping Arrays: forEach
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// forEach will alwas loop through the entire array without a way to breakout the loop

/*
console.log('----- for of --------');
for (const movement of movements) {
  console.log(movement);
}

console.log('----- for of with Array.entries() --------');
for (const [i, mov] of movements.entries()) {
  console.log(`${i} : ${mov} `.padEnd(15, '.'));
}

console.log('----- forEach --------');
movements.forEach(function (movement) {
  console.log(movement);
});

console.log('----- forEach with index--------');
movements.forEach(function (mov, i, arr) {
  console.log(`${i} : ${mov} `.padEnd(15, '*'));
});


*/

/////////////////////////////////////////////////
//145. forEach With Maps and Sets
/////////////////////////////////////////////////

/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// map
currencies.forEach(function (val, key, map) {
  console.log(`${key} : ${val}`);
});

// set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

*/

/////////////////////////////////////////////////
//146. PROJECT: "Bankist" App
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//150. The map Method
/////////////////////////////////////////////////

// map method, returns a new array

/*
const euroToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

*/

/////////////////////////////////////////////////
//152. The filter Method
/////////////////////////////////////////////////
// filter method will return a new array

/*

// get all deposits transactions
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// get all withrawals transactions
const withrawals = movements.filter(function (mov) {
  return mov < 0;
});



*/

/////////////////////////////////////////////////
//153. The reduce Method
/////////////////////////////////////////////////

// accumulator is like a snowball
// the second parameter of the reduce function is the starting value of the accumulator
/*

const balance = movements.reduce((acc, item) => acc + item, 0);

// get maximum value of an array

const maximum = movements.reduce((acc, current) => (current > acc ? (acc = current) : acc), movements[0]);


*/

/////////////////////////////////////////////////
//155. The Magic of Chaining Methods
/////////////////////////////////////////////////
/*


const euroToUsd = 1.1;

const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov);

*/

/////////////////////////////////////////////////
//157. The find Method
/////////////////////////////////////////////////

/*


const withd = movements.find(mov => mov < 0);
console.log(withd);
const account = accounts.find(account => account.owner === 'Jessica Davis');

console.log(account);

*/

/////////////////////////////////////////////////
//161. some and every
/////////////////////////////////////////////////
/*


/////// SOME
console.log(movements);
// checks for equality
console.log(movements.includes(-130));
console.log(movements.some(mov => (mov = -130)));

// condition
console.log(movements.some(mov => mov > 0));
console.log(movements.some(mov => mov > 1500));

///// EVERY
console.log(movements.every(mov => mov > 0));

// Separate callback

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


*/

/////////////////////////////////////////////////
//162. flat and flatMap
/////////////////////////////////////////////////

/*


const arr = [[1, 2, 3], [4, 5, 6], [7, 8], 9, 10];
const arr2 = [[1, 2, 3], [4, 5, 6], [7, [3, 2, 1]], 9, 10];

console.log(arr.flat());
console.log(arr2.flat(2));

const allMovementsAverage = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, current) => acc / 2 + current / 2);

const allMovementsAverage2 = accounts.flatMap(acc => acc.movements).reduce((acc, current) => acc / 2 + current / 2);

console.log(allMovementsAverage);
console.log(allMovementsAverage2);


*/

/////////////////////////////////////////////////
//163. Sorting Arrays
/////////////////////////////////////////////////
///////// Sort method mutates the origina array

/*


// sort with strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());
console.log(owners);

// sort with number doesn't actually work by default, as numbers are considered strings on the sorting method

console.log(movements);

////// Ascending a > b
// console.log(movements.sort());
// to fix this we can pass a compare callback function
// to (switch) the order, return any number > 0
// to (keep) the order, return any number < 0
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

// more simplified version
// because a > b when we are sorting Ascendingly, so when we substract a - b the result will always be a positive number > 0 ,,
movements.sort((a, b) => a - b);

console.log(movements);

////// Descending
movements.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});

// simplified version

movements.sort((a, b) => b - a);
console.log(movements);


*/

/////////////////////////////////////////////////
//164. More Ways of Creating and Filling Arrays
/////////////////////////////////////////////////

/*


const x = new Array(7);
x.fill(1);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// 100 random dice rolls
const diceRolls = Array.from({ length: 100 }, () => Math.ceil(Math.random() * 6));

console.log(diceRolls);

const allMovementsUI = Array.from(document.querySelectorAll('.movements__value'), currEl =>
  Number(currEl.textContent.replace(`€`, ''))
);

console.log(allMovementsUI);


*/

/////////////////////////////////////////////////
//166. Array Methods Practice
/////////////////////////////////////////////////
/*


// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements.filter(mov => mov > 0))
  .reduce((sum, curr) => sum + curr, 0);

console.log(bankDepositSum);

// 2.
const deposit1000Count = accounts.flatMap(acc => acc.movements.filter(mov => mov >= 1000)).length;

const deposit1000Count2 = accounts.flatMap(acc => acc.movements).reduce((acc, curr) => (curr >= 1000 ? ++acc : acc), 0);

console.log(deposit1000Count);
console.log(deposit1000Count2);

// 3. using the reduce method
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      // another solution , getting the property using the bracket notation conditionally
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4. convert any string to a title case

const convertTitleCase = function (title) {
  const capitalise = word => word[0].toUpperCase() + word.slice(1);
  const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(str => (exceptions.includes(str) ? str : capitalise(str)))
    .join(' ');

  return capitalise(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title, and NOT too long'));
console.log(convertTitleCase('and another title with an EXAMPLE'));



*/
