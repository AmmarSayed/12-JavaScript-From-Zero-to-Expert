'use strict';

/* 
calcAge is defined in the global scope,
calcAge has it's own scope as well, which is the variable envirnoment of it's exicution context
*/

/*



function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // this firstName variable is not inside scope of calcAge function
  // howver it's definded in the global scope
  console.log(firstName);

  // printAge function has it's ownscopt as well,
  // it has an access to all variables in the global scope and all variables defined iside the calcAge function
  // it has access to the birthYear parameter as well
  function printAge() {
    let output = `${firstName},Your'e ${age}, born in ${birthYear}`;

    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Ammar';

      // Reassign a outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }

    console.log(output);

    // var are function scoped, so an outer scope has access to it
    console.log(millenial);

    
    // fucntions are block scoped as well
    // add(2, 3); // error

    // str is definded inside a block scope, which won't be accessable from outside
    // console.log(str); // error

    
  }

  printAge();
  return age;
}

const firstName = 'Jonas';

calcAge(1991);



/*

// age is definded inside calcAge function, so global scope has no access to it
console.log(age);
// print age is definded insice calcAge function, so global scope has no access to it
printAge();

*/

////////////////////////////////////////////////////
// 95. Hoisting and TDZ in Practice
////////////////////////////////////////////////////

/*


console.log(me); // undefined

// the job and year still in the TDZ "Temporary Dead Zone"
// console.log(job); // ReferenceError : cannot access 'job' before initialization
// console.log(year);

var me = 'Ammar';
let job = 'Teacher';
const year = 1988;

//Functions
console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // ReferenceError : cannot access 'addExpr' before initialization

console.log(addArrow); // undefinded
// if we're trying to invoce undefinded() , so it's not a function 😁
console.log(addArrow(2, 3)); // TypeError: addArrow is not a function 😁

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

////////////////////////////////////////////////////
// Example
////////////////////////////////////////////////////

// in this example it there's no product we delete the items
// though numProducts is 10, but it's defined using (var),which will be hoisted and returns undefinded, which's a falsy value,
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}

var x = 1;
let y = 1;
const z = 1;

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// 96. The this Keyword
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// "this" keword/variable: Special variable that is created for every execution context(every function).
// Takes the vakue of (points to) the owner of the function in which the "this" keyword is used

// the value if "this" depends on how the function is called,

// *** Function as Method inside an object, this = <Object that's calling the method>

const ammar = {
  name: 'Ammar',
  year: 1988,
  calcAge: function () {
    //this will be <ammar>
    return 2037 - this.year;
  },
};

ammar.calcAge(); // 49

// *** simple function cal this=undefined , in strict mode! otherwize this = window (in the browser)

// *** Arrow function, this  = <this of surrounding/parent function (lexical this)>

// *** Event listener: this = <DOM element that the handler is attached to>

// ** "this" does NOT point to the function itself, and also NOT to it's variable environment

*/

////////////////////////////////////////////////////
// 97. The this Keyword in Practice
////////////////////////////////////////////////////

/*


console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);

  console.log(this); // undefined in the "strict mode", else "window object"
};
// simple function call
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);

  console.log(this); // window object, because arrow functions doesn't have their own "this", so it takes the "this" of its parent scope
};
// simple function call
calcAgeArrow(1991);

const ammar = {
  firstName: 'Ammar',
  year: 1991,

  // "this" inside of a method so it's equal to the object that's calling the method
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

ammar.calcAge(); // ammar object

const matilda = {
  firstName: 'Matilda',
  year: 2017,
};

// method borrowing
matilda.calcAge = ammar.calcAge;

// calling the method using matilda object
matilda.calcAge(); // "this" keword points to the object calling the method

const f = ammar.calcAge;

console.log(f);

// now the function f is called as normal function, so "this" is referring to undefinded
f(); // Cannot read properties of undefined (reading 'year')


*/

////////////////////////////////////////////////////
// 98. Regular Functions vs. Arrow Functions
////////////////////////////////////////////////////

/*


const ammar =
  // this is NOT A BLOCK scope, it's an Object Litteral
  {
    firstName: 'Ammar',
    year: 1991,

    // "this" inside of a method so it's equal to the object that's calling the method
    calcAge: function () {
      console.log(this);
      console.log(2037 - this.year);
      const self = this;

      // Regular function call will have it's own "this", even if it's called inside a method, so will refere to the Global Scope

      // Solution 1
      // normal function inside a method
      // const isMilelnial = function () {
      //   // console.log(this); // undefined
      //   // console.log(this.year >= 1981 && this.year <= 1996); // Cannot read properties of undefined (reading 'year')

      //   console.log(self); // <object calling the method calcAge>
      //   console.log(self.year >= 1981 && self.year <= 1996); //true
      // };

      // Solution 2
      const isMilelnial = () => {
        //arrow function will use the "this" keword of it's parent
        console.log(this); // <object calling the method calcAge>

        console.log(this.year >= 1981 && this.year <= 1996); //true
      };

      // if it's as normal function, "this" will refere to Global Scope
      // if it's an arrow function, "this" will refere to parent method "this" <object calling the method>.
      isMilelnial();
    },

    // arrow function as method, arrow function does NOT have "this"
    // the scope of ANY method inside of an object is the GLOBAL Scope/<Window Object>
    greet: () => console.log(`Hey ${this.firstName}`), // undefinded

    // solution
    // don't use an arrow function as a method of an object
    // use normal function expressions for method creation
    greet2: function () {
      console.log(`Hey ${this.firstName}`);
    },
  };

ammar.greet();
ammar.calcAge();

////////////////////////////////
////////////////////////////////
// Arguments keyword
////////////////////////////////
////////////////////////////////

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

const addArrow = (a, b) => {
  console.log(arguments); // arrow function doesn't have access to arguments variable
  return a + b;
};

addArrow(2, 5);


*/

////////////////////////////////////////////////////
// 99. Primitives vs. Objects (Primitive vs. Reference Types)
////////////////////////////////////////////////////
/*


// premitives : Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non Premitives .. everthing else (OBJECTS) : Object Literals, Arrays, Functions, Many more...

// Premitives => premitive types
// Objects => Reference types

let age = 30;
let oldAge = age; // oldAge = 30

age = 31; // changed the age to be 31

console.log(age); // 31
console.log(oldAge); // 30

const me = {
  fName: 'Ammar',
  age: 35,
};

const friend = me;

friend.age = 27; // changed the age to be 27

console.log('Friend: ', friend); // age 27
console.log('Me: ', me); // age also 27


*/

////////////////////////////////////////////////////
// 100. Primitives vs. Objects in Practice
////////////////////////////////////////////////////
// primitive types
let lastName = 'Sayed';
let oldLastName = lastName;
lastName = 'Ali';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  fName: 'Jessica',
  lName: 'Williams',
  age: 27,
};

const marridJessica = jessica; // we're not creating a new object in the heap, it's another variable in the stack which holds the address/reference to the original object

marridJessica.lName = 'Davis';

// both objects have changed now
console.log('Before Merrage: ', jessica);
console.log('After Merrage: ', marridJessica);

// solution is to create a new object and copy all the properties inside the old object

const jessica2 = {
  fName: 'Jessica',
  lName: 'Williams',
  age: 27,
  family: ['Ali', 'Ahmed'],
};

//// **** warning **** this techinque doesn't copy object definded inside objects "Shallow copy, not a Deep clone"
const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lName = 'Davis'; // last name changes only on jessicaCopy

jessicaCopy.family.push('Mary'); // the new value also will be added to jessica2, because Object.assign won't copy second level objects ,such as arrays  etc.
jessicaCopy.family.push('John');

console.log('Before Merrage: ', jessica2);
console.log('After Merrage: ', jessicaCopy);
