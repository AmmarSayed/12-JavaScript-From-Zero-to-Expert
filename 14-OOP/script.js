'use strict';

/*

/////////////////////////////////
/////////////////////////////////
// constructor function
/////////////////////////////////
/////////////////////////////////

const Person = function (firstName, birthYear) {
  // "this" is the current object when the "new" operator calls the function

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a methid inside the constructor function
  // this is bad practise
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// The 'new' operator does the following wile calling the function

// 1. a new empty object is created {}
// 2. function is called, in which the "this" keyword points to {}
// 3. {} is linked to the prototype =====> theNewPerson.__proto__ = Person.prototype
// 4. the function automatically return the created object
const ammar = new Person('Ammar', 1988);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(ammar);

console.log(matilda, jack);

console.log(ammar instanceof Person);


// Prototypes

// each and ever function in JavaScript has a property called a Prototype
// so also constructor functions
// so every object created by the constructor function has an access to the methods and properties that are defined on constructor's Prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

// call the method on the instance
// event if it's not defined on the object it self
console.log(ammar);

ammar.calcAge();
matilda.calcAge();
// show the prototype of the object
console.log(ammar.__proto__);
console.log(Person.__proto__);

// the prototype is not the prototype of Person class, it's the protoype which will be used as the prototype for all the objects that are created using the Person constructor function
// it could have been called .protoTypeOfLinkedObject instead 😉
console.log(Person.prototype);

console.log(ammar.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(ammar)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(ammar.__proto__ === Person.__proto__); // false

// we may add properties on the prototype
Person.prototype.species = 'Homo Sapiens';

// however when we check if the object hase this property, it's not on the object itself, it's on the prototype, however it has access to it.
console.log(ammar.hasOwnProperty('firstName')); // true
console.log(ammar.hasOwnProperty('species')); // false

//
console.log(ammar.__proto__.__proto__);

*/

/////////////////////////////////
/////////////////////////////////
// ES6 Classes
/////////////////////////////////
/////////////////////////////////

/*


// class expressison

// const PersonCl = class {}

// class declaration
// classes in JavaScript is a syntatic sugar for the constructor functions, they're not actual classes
class PersonCl {
  constructor(fullName, birthYear) {
    (this.fullName = fullName), (this.birthYear = birthYear);
  }

  // Area for prototypes, outside the constructor
  // Methods that will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // using the setter and getter for validation of the constructor function arguments
  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log('please enter the full name');
  }

  get fullName() {
    return this._fullName;
  }
}

const ammar = new PersonCl('Ammar Sayed', 1988);
console.log(ammar);
ammar.calcAge();
console.log(ammar.__proto__);
console.log(ammar.__proto__ === PersonCl.prototype); // true

ammar.greet();
// using getter, looks like a property not a method while calling
console.log(ammar.age);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens, so we can return a class from a function
// 3. Classes are executed in strict mode, even if we don't activate it in our script

/////////////////////////////////
/////////////////////////////////
//214. Setters and Getters
/////////////////////////////////
/////////////////////////////////

// setters and getters in javascript
const account = {
  owner: 'ammar',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.at(-1);
  },

  set latest(num) {
    this.movements.pop();
    this.movements.push(num);
  },
};

console.log(account.latest);
account.latest = 750;

console.log(account.movements);

*/

/////////////////////////////////
/////////////////////////////////
//215. Static Methods
/////////////////////////////////
/////////////////////////////////

/////////////////////////////////
/////////////////////////////////
//216. Object.create
/////////////////////////////////
/////////////////////////////////

/*


// 1. notice we won't need .prototype property
// 2. we won't need the constructor function with "new" keyword
// 3. this way of creating classes is the least used way.

// create the object that will be used as a prototype
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // implement our own constructor function
  // however we're not using any "new" keyword here
  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

//create an empty object, and link the object which will be it's prototype
const ammar = Object.create(PersonProto);

ammar.fullName = 'Ammar Sayed';
ammar.birthYear = 1988;
ammar.calcAge();
console.log(ammar.__proto__ === PersonProto);

// using the init functionality we created
const samy = Object.create(PersonProto);
samy.init('Samy Bisheer', 1992);
console.log(samy);
samy.calcAge();
console.log(samy.fullName);


*/

/////////////////////////////////
/////////////////////////////////
//218. Inheritance Between "Classes": Constructor Functions
/////////////////////////////////
/////////////////////////////////

/*



// person constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (fullName, birthYear, course) {
  // normal function call, we can use the "call" metod to set the "this" keyword of the Person function to be the current "this" of the Student which will be pointing to the object that calles the Student constructor function
  Person.call(this, fullName, birthYear);
  this.course = course;
};

// Manually Linking the Student prototype to the Person prototype
// We have to connect before adding any new properties, because Object.create will return an empty object on which we can add methods
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}.`);
};

const ammar = new Student('Ammar Sayed', 1988, 'Computer Science');
console.log(ammar);
ammar.introduce();
ammar.calcAge();

console.log(ammar instanceof Student); // true
console.log(ammar instanceof Person); // true
console.log(ammar instanceof Object); // true


*/

/////////////////////////////////
/////////////////////////////////
//220. Inheritance Between "Classes": ES6 Classes
/////////////////////////////////
/////////////////////////////////

/*


class PersonCl {
  constructor(fullName, birthYear) {
    (this.fullName = fullName), (this.birthYear = birthYear);
  }

  // Area for prototypes, outside the constructor
  // Methods that will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // using the setter and getter for validation of the constructor function arguments
  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log('please enter the full name');
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // instead of calling the PersonCl.Call(this,fullName, birthYear)
    // we use the super function
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`
    );
  }
}

const ammar = new StudentCl('Ammar Sayed', 1988, 'Computer Science');

console.log(ammar);

ammar.introduce();
ammar.calcAge();


*/

/////////////////////////////////
/////////////////////////////////
//221. Inheritance Between "Classes": Object.create
/////////////////////////////////
/////////////////////////////////
/*


const PersonProto = {
  calcAge() {
    console.log(`Age: ${2037 - this.birthYear}`);
  },

  // implement our own constructor function
  // however we're not using any "new" keyword here
  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const ammar = Object.create(PersonProto);
ammar.init('Ammar', 1988);

ammar.calcAge();
console.log(ammar);

// create an object with it's prototype getting referenced to PersonProto
const StudentProto = Object.create(PersonProto);

// create a nanual initialization function
StudentProto.init = function (fullName, birthYear, course) {
  // we need to use the function init from the PersonProto object
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

// create a new object, with the prototype set to SutdentProto Object
const lele = Object.create(StudentProto);

lele.init('Lele', 1992, 'Math');

console.log(lele);
lele.calcAge();
lele.introduce();


*/

/////////////////////////////////
/////////////////////////////////
// 222. Another Class Example
// 223. Encapsulation: Protected Properties and Methods
// 224. Encapsulation: Private Class Fields and Methods
//225. Chaining Methods
/////////////////////////////////
/////////////////////////////////

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
class Account {
  // 1. Public fields (instances)
  local = navigator.language;

  // 2. Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // protected property (not for real)
    // this._movements = [];
    this.#pin = pin;
    // this.locale = navigator.language;

    //
    console.log(`Thanks for openining an account`);
  }

  // 3. Public methods
  // Public interface API to the object
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  getMovements() {
    return this.#movements;
  }

  // 4. Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Johnas', 'EUR', 1111, []);

acc1.deposit(250);
acc1.withdraw(120);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.getMovements());

/////////////////////////////////
// Chaining

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(1500).withdraw(2000);
console.log(acc1.getMovements());

/////////////////////////////////
/////////////////////////////////
// 222. Another Class Example
/////////////////////////////////
/////////////////////////////////
