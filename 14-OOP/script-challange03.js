'use strict';

// coding challange #2
console.log('----- Challange #3 ---------');

// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h.`);
};

// 3.
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h.`);
};

// 1.
const EV = function (make, speed, charge) {
  //
  Car.call(this, make, speed);
  this.charge = charge;
};

// connect the EV prototype to the Car prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} was charged to ${this.charge}%`);
};

// we're overriting the accelerate method from the Car class
// basically this new method is what javaScript will implement since it exists in the EV object prototype, even if the same method exist on the Car prototype
// Polymorphism
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 7;

  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 100);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

tesla.break();

tesla.chargeBattery(98);
tesla.chargeBattery(100);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

console.log(tesla);
