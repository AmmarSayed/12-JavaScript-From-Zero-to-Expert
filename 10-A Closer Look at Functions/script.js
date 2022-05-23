'use strict';

////////////////////////////////////////////////
//128. Default Parameters
////////////////////////////////////////////////
/*

const bookingsArr = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookingsArr.push(booking);
};

createBooking('LH123');
createBooking('LH123', 3);
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 800);

*/

////////////////////////////////////////////////
//129. How Passing Arguments Works: Value vs. Reference
////////////////////////////////////////////////
/*


const flight = 'LH234';
const ammar = {
  fullName: 'Ammar Sayed',
  passport: 2354847879,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //this will NOT affect the original flightNum
  passenger.fullName = 'Mr. ' + passenger.fullName; // the original object will be changed

  if (passenger.passport === 2354847879) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, ammar);
console.log(flight); // LH234
console.log(ammar); // fullName = "Mr. Ammar Sayed"

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000); // original passport is changed
};

newPassport(ammar); //
checkIn(flight, ammar); // wrong passport


*/

////////////////////////////////////////////////
//130. First-Class and Higher-Order Functions
////////////////////////////////////////////////

////////////////////////////////////////////////
//131. Functions Accepting Callback Functions
////////////////////////////////////////////////
/*

const oneWord = function (txt) {
  return txt.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [f, ...s] = str.split(' ');
  return [f.toUpperCase(), ...s].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

*/

////////////////////////////////////////////////
//132. Functions Returning Functions
////////////////////////////////////////////////
/*


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Ammar');
greeterHey('Enas');

greet('Hello')('Ammar Sayed');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hello')('Arrow Function');

*/

////////////////////////////////////////////////
//133. The call and apply Methods
////////////////////////////////////////////////
/*

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

console.log(lufthansa);

lufthansa.book(239, 'Ammar Sayed');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// this won't work, because "this" will point to undefined
// book(555,"Ammar Sayed")

///////// Call Method /////////
// solution is to tell the function to call the object we need be fore the rest of the arguments
// so we set the "this" key word mannually to a certain object
book.call(eurowings, 555, 'Ammar Sayed');
book.call(lufthansa, 555, 'Ali Ali');
console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Merry Copper');
book.call(swiss, 583, 'Well Smith');
console.log(swiss);

//// "Apply" Method "It's same as "Call", but it receives an array"////
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

// "Apply" is no longer being used in modern javaScript as we can simply spread the data out of the array and use "Call" instead as following:
book.call(swiss, ...flightData);

////////////////////////////////////////////////
//134. The bind Method
////////////////////////////////////////////////
// "bind" method returns a new function, that has "this" set to the object we passed to "bind" method
//book.call(eurowings, 555, 'Ammar Sayed');
// we run 'bind' method on a function, then store the returned function in a variable
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(555, 'Ammar Sayed');
bookLH(555, 'Ammar Sayed');
bookLX(555, 'Ammar Sayed');

// we can also pass an argument after the object, so what's left is the second argument
const bookLX23 = book.bind(swiss, 23);

bookLX23('Ammar Sayed');

// With Event Listeners , using methods of an object on an Event Listener

lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.table(this);
  this.planes++;
  console.log(this.planes);
};

lufthansa.buyPlane();

// REMEBER : "this" points to the element on which the event handler is attahced to

// so we use "bind" because it will return a new function without calling it
// if we use "call" the function will be envocked directly, though we need to watch for click event.
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// or we simply make a normal function call from inside the function
document.querySelector('.buy').addEventListener('click', function () {
  lufthansa.buyPlane();
});

// partial application // creating a function based on another function and set a default value for part of the parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT =  value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

/// using closures
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT23 = addTaxRate(0.23);

console.log(addVAT23(100)); // 123


*/
////////////////////////////////////////////////
//135. Coding Challenge #1
////////////////////////////////////////////////
/*

Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?


Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section  


GOOD LUCK 😃
*/

/*


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let input = prompt(`What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)`);

    while (input > 3 || input < 0 || isNaN(input) || !input) {
      input = prompt(`What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)`);
    }
    this.answers[input]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log(this.answers);
    }
  },
};

const pollBtn = document.querySelector('.poll');

pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');


*/

////////////////////////////////////////////////
//136. Immediately Invoked Function Expressions (IIFE)
////////////////////////////////////////////////

/*


const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// IIFE
(function () {
  console.log(`This will never run again`);
})();

(() => console.log(`This will ALSO never run again`))();

*/

////////////////////////////////////////////////
//137. Closures
////////////////////////////////////////////////

/*


const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//
const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);


*/

////////////////////////////////////////////////
//138. More Closure Examples
////////////////////////////////////////////////
/*


// Example 1
let f;
const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

g(); // now 'a = 23' and 'f =function()'
f(); // 23 * 2 = 46
console.dir(f);

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h(); //now 'b = 777' and f will have a different function 'f =function()'
f(); // 777 * 2 = 1554
console.dir(f);

// Example 2 , timer

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We're now boarding all ${n} passengers`);

    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds....`);
};

boardPassengers(180, 3);

*/

////////////////////////////////////////////////
//139. Coding Challenge #2
////////////////////////////////////////////////

/*

Coding Challenge #2
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
GOOD LUCK 😃

*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// even after the function was immediately invoked, and was removed from the call stack, the addEventListener function still has access to the varialbes inside that function, including header variable, using closuer
