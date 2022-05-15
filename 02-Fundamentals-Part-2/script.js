'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasdriverlicense = true; // without the strict mode, javascript will simply create a new variable called hasdriverlicense, without giving us an error.
if (hasDriversLicense) console.log('I can drive a car');
*/

/*

function logger() {
  console.log('My name is Ammar');
}

//calling / running / invoking function
logger();
logger();
logger();
logger();

// function accepts parameters
function fruitProccessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}

// apples becomes 5, oranges becomes 0,
// 5 and 0 are functions arguments
console.log(fruitProccessor(5, 0));

//saving the value returning from the function into a variable
const appleJuice = fruitProccessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProccessor(2, 4);
console.log(appleOrangeJuice);


*/

/////////////////////////////
// 34. Function Declarations vs. Expressions
////////////////////////////

/*
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1988);
console.log(age1);

// function Expression (an expression produces a value)
// we cannot call function expression before it's defined in the code
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1988);
console.log(age2);


*/

/////////////////////////////
// 35. Arrow Functions
////////////////////////////
/*

// a special form of function expression

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  return `${firstName || 'Employee'} retires in ${retirment} years!`;
};

console.log(yearsUntillRetirement(1988));
console.log(yearsUntillRetirement(1988, 'Bob'));
console.log(yearsUntillRetirement(1988, 'Ammar'));


*/

/////////////////////////////
// 36. Functions Calling Other Functions
////////////////////////////

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProccessor(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);

  const juice = `juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProccessor(2, 3));


*/

/////////////////////////////
// 37. Reviewing Functions
////////////////////////////

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) return retirement;

  return -1;

  // return `${firstName || 'Employee'} retires in ${retirement} years!`;
};

console.log(yearsUntillRetirement(1988, 'Ammar'));
console.log(yearsUntillRetirement(1970, 'Mike'));
console.log(yearsUntillRetirement(1991, 'Bob'));


*/

/////////////////////////////
// 38. Coding Challenge #1 - in a separated file
////////////////////////////

/////////////////////////////
// 39. Introduction to Arrays
////////////////////////////

/*
const friends = ['Ammar', 'Ali', 'Ahmed'];
console.log(friends);
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(friends.at(-1));

// we can mutate an array as following
friends[2] = 'Yamen';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

//Exercise
/////////////////////
const calcAge = birthYear => 2037 - birthYear;
const years = [1990, 1967, 2022, 2010, 2018];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years.at(-1)));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.at(-1))];

console.log(ages);

*/

/////////////////////////////
// 40. Basic Array Operations (Methods)
////////////////////////////

/*


const friends = ['Ammar', 'Ali', 'Ahmed'];

// push, adds an element to the end of an array,and returns the length of the new array
const newLength = friends.push('Jay');
console.log(friends); //  ['Ammar', 'Ali', 'Ahmed', 'Jay']

// unshift, adds an element to the begining of an array, and returns the length of the new array
friends.unshift('John');
console.log(friends);

//pop removes an element from the end of an array, and returns the removed element
const poped = friends.pop();
console.log(poped);
console.log(friends);

//shift removes an element from the begning of an array, returns
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf('Ali')); // 1
console.log(friends.indexOf('bob')); // -1 which means doesn't exist
console.log(friends.includes('Ali')); // True
console.log(friends.includes('ali')); // false ,, it uses strict equality ===
console.log(friends.includes('bob')); // false

if (friends.includes('Peter')) console.log('You have a friend called Peter');

if (friends.includes('Ammar')) console.log('You have a friend called Ammar');


*/

/////////////////////////////
// 41. Coding Challenge #2 in a separated file
////////////////////////////

/////////////////////////////
// 42. Introduction to Objects
////////////////////////////

/*

//object literal syntax
const ammar = {
  firstName: 'Ammar',
  lastName: 'Sayed',
  age: 2037 - 1988,
  job: 'teacher',
  friens: ['Ammar', 'Ahmed', 'Ali'],
};

*/

/////////////////////////////
// 43. Dot vs. Bracket Notation
////////////////////////////

/*

const ammar = {
  firstName: 'Ammar',
  lastName: 'Sayed',
  age: 2037 - 1988,
  job: 'teacher',
  friends: ['Ammar', 'Ahmed', 'Ali'],
};

console.log(ammar);

console.log(ammar.lastName);

// the bracket notation accepts an exepression
console.log(ammar['job']);

const nameKey = 'Name';

// we use the bracket notation if we want to compute the key name
console.log(ammar['first' + nameKey]);
console.log(ammar['last' + nameKey]);

const interestedIn =
  prompt(`What do you want to know about Ammar?\nChoose between:
1- firstName
2- lastName
3- age
4- job
5- friends
`);

if (ammar[interestedIn]) console.log(ammar[interestedIn]);
else
  console.log(`Wrong request! Choose between:
1- firstName
2- lastName
3- age
4- job
5- friends`);

ammar.location = 'Egypt';

ammar['twitter'] = '@ammar_sayed';
console.log(ammar);

// Challange

console.log(
  `${ammar.firstName} has ${ammar.friends.length} friends, and his best friend is called ${ammar.friends[1]}!`
);


*/

/////////////////////////////
// 44. Object Methods
////////////////////////////

/*

const ammar = {
  firstName: 'Ammar',
  lastName: 'Sayed',
  birthYear: 1988,
  job: 'teacher',
  friends: ['Ammar', 'Ahmed', 'Ali'],
  hasDrivingLicence: true,
  // calcAge: function (birthYear) {
  //   return 2034 - birthYear;
  // },

  // calcAge: function () {
  //   //this keyword === the object calling the method
  //   // console.log(this);
  //   return 2034 - this.birthYear;
  // },

  calcAge: function () {
    //Here we're storing the calculation in a variable so we can call it later without the need to re-calculate the age again
    this.age = 2034 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    // we must run the calcAge() to get the age value, in case if it didn't run before
    this.summary = `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }. He ${
      this.hasDrivingLicence ? 'has' : "doesn't have"
    } a driver's licence`;
    return this.summary;
  },
};

//getting the summary
console.log(ammar.getSummary());

//run the calculation once
console.log(ammar.calcAge());

// call the property
console.log(ammar.age);
console.log(ammar.age);
console.log(ammar.age);


*/

/////////////////////////////
// 45. Coding Challenge #3 in a seprated file
////////////////////////////

/////////////////////////////
// 46. Iteration: The for Loop
////////////////////////////
/*
for (let index = 1; index <= 10; index++) {
  console.log(`Lefting weights repetition ${index} 🏋️‍♀️`);
}

*/

/////////////////////////////
// 47. Looping Arrays, Breaking and Continuing
////////////////////////////

/*


const friends = ['Ammar', 'Ahmed', 'Ali', 1988, false, [1, 2, 3]];
const types = [];
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
  // filling the types array
  // types[i] = typeof friends[i];
  // another way to fill the array, using push method
  types.push(typeof friends[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  const age = 2037 - years[i];
  ages.push(age);
}

console.log(ages);

// continue and break
// continue escapes the current etiration of the loop to the next one
console.log('------ ONLY STRINGS -------');
for (let i = 0; i < friends.length; i++) {
  if (typeof friends[i] !== 'string') continue;
  console.log(friends[i]);
}


*/

/////////////////////////////
// 48. Looping Backwards and Loops in Loops
////////////////////////////

/*


const friends = ['Ammar', 'Ahmed', 'Ali', 1988, false, [1, '2', 3]];

for (let i = friends.length - 1; i >= 0; i--) {
  console.log(`${i} : ${friends[i]}`);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--** starting exercise ${exercise} **---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lefing weight repetition ${rep} 🏋️‍♀️!`);
  }
}


*/

/////////////////////////////
// 49. The while Loop
////////////////////////////
/*


let exercise = 1;

while (exercise <= 3) {
  console.log(`--** starting exercise ${exercise} **---`);

  let rep = 1;
  while (rep <= 5) {
    console.log(`Exercise ${exercise}: Lefing weight repetition ${rep} 🏋️‍♀️!`);
    rep++;
  }
  exercise++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6)
    console.log(`You rolled a ${dice}. ---- loop is a bout to end!`);
}


*/

/////////////////////////////
// 50. Coding Challenge #4 in a separated file
////////////////////////////
